import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_META_DATAS } from './meta-datas';

@Injectable({
  providedIn: 'root',
})
export class MetaTitleService {
  private subscription = new Subscription();
  private url: string;
  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    this.subscription = this.router.events.subscribe((event: RouterEvent) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if (this.url) {
        this.updateMetas((tag) => this.deleteTag(tag));
      }
      this.url = event.url;
      this.updateMetas((tag) => this.addTag(tag));
      this.updateTitle();
    });
  }

  private updateTitle(): void {
    const meta = APP_META_DATAS[this.url];
    if (meta.title) {
      this.title.setTitle(meta.title);
    } else {
      this.title.setTitle('Default title');
    }
  }

  private updateMetas(fn: CallableFunction) {
    const meta = APP_META_DATAS[this.url];
    if (meta.tags) {
      Object.keys(meta.tags).map((tag_name) => {
        const tag: MetaDefinition = {
          name: tag_name,
          content: meta.tags[tag_name],
        };
        fn(tag);
      });
    }
  }

  private addTag(tag: MetaDefinition): void {
    if (this.meta.getTag(`name="${tag.name}"`)) {
      // In case a meta with this name exist, update it
      this.meta.updateTag(tag);
    } else {
      this.meta.addTag(tag);
    }
  }

  private deleteTag(tag: MetaDefinition) {
    this.meta.removeTag(`name="${tag.name}"`);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

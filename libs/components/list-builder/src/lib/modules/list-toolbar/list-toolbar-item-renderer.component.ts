import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

/**
 * @internal
 */
@Component({
  selector: 'sky-list-toolbar-item-renderer',
  template: '<ng-template #container />',
  standalone: false,
})
export class SkyListToolbarItemRendererComponent implements OnInit {
  @Input()
  public template: TemplateRef<unknown>;

  @ViewChild('container', {
    read: ViewContainerRef,
    static: true,
  })
  private container: ViewContainerRef;

  public ngOnInit(): void {
    if (this.template !== undefined) {
      this.container.createEmbeddedView(this.template, this);
    }
  }
}

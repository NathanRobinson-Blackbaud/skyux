import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyModalService } from '@skyux/modals';

import { VerticalTabsetModalWithColumnsComponent } from './vertical-tabset-modal-with-columns.component';
import { VerticalTabsetModalComponent } from './vertical-tabset-modal.component';

let nextTabId = 4;

@Component({
  selector: 'app-vertical-tabset',
  templateUrl: './vertical-tabset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class VerticalTabsetComponent {
  public active = true;

  public group1Disabled = false;

  public group1Open = true;

  public group2Disabled = false;

  public group2Open = false;

  public group3Disabled = true;

  public group3Open = false;

  public maintainTabContent = false;

  public tabDisabled = true;

  public tabs = [
    {
      id: '1',
      heading: 'tab 1',
      content: 'Tab 1 content',
    },
    {
      id: '2',
      heading: 'tab 2',
      content: 'Tab 2 content',
    },
    {
      id: '3',
      heading: 'tab 3',
      content: 'Tab 3 content',
    },
  ];

  #modalService: SkyModalService;

  constructor(modalService: SkyModalService) {
    this.#modalService = modalService;
  }

  public onAddTabClick(): void {
    this.tabs.push({
      id: nextTabId.toString(),
      heading: `tab ${nextTabId}`,
      content: `Tab ${nextTabId} content`,
    });
    nextTabId++;
  }

  public onDeleteTabClick(index: number): void {
    this.tabs.splice(index, 1);
  }

  public openVerticalTabsetModal(): void {
    this.#modalService.open(VerticalTabsetModalComponent, { size: 'large' });
  }

  public openVerticalTabsetModalWithColumns(): void {
    this.#modalService.open(VerticalTabsetModalWithColumnsComponent, {
      size: 'large',
    });
  }
}

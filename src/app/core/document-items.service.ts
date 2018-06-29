import {Injectable} from '@angular/core';

export interface DocItem {
    id: string;
    name: string;
    examples?: string[];
}

const docs: DocItem[] = [
    {id: 'accordion', name: 'Accordion', examples: ['accordion-overview']},
    {id: 'breadcrumbs', name: 'Breadcrumbs'},
    {id: 'button', name: 'Button', examples: ['button-types']},
    {id: 'checkbox', name: 'Checkbox', examples: ['checkbox-overview']},
    {id: 'chip', name: 'Chip', examples: ['chip-overview']},
    {id: 'drawer', name: 'Drawer', examples: ['drawer-overview']},
    {id: 'icon', name: 'Icon', examples: ['icon-overview']},
    {id: 'input', name: 'Input', examples: ['input-overview']},
    {id: 'list', name: 'List', examples: ['list-overview']},
    {id: 'modal', name: 'Modal', examples: ['modal-overview']},
    {id: 'navbar', name: 'Navbar', examples: ['navbar-overview']},
    {id: 'pagination', name: 'Pagination', examples: ['pagination-overview']},
    {id: 'picklist', name: 'Picklist'},
    {id: 'popover', name: 'Popover', examples: ['popover-overview']},
    {id: 'progress-indicators', name: 'Progress Indicators', examples: ['progress-indicator-overview']},
    {id: 'radio-button', name: 'Radio button', examples: ['radio-button-overview']},
    {id: 'select', name: 'Select', examples: ['select-overview']},
    {id: 'subnav', name: 'Subnav', examples: ['subnav-overview']},
    {id: 'tabs', name: 'Tabs', examples: ['tabs-overview']},
    {id: 'tile', name: 'Tile', examples: ['tile-overview']},
    {id: 'typeform-survey', name: 'Typeform survey', examples: ['typeform-survey-overview']}
];

@Injectable()
export class DocumentItemsService {
    getDocItems(): DocItem[] {
        return docs;
    }

    getItemById(id: string): DocItem | undefined {
        return docs.find(doc => doc.id === id);
    }
}
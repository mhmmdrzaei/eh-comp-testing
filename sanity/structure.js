import { CaseIcon } from '@sanity/icons';
import { ListBuilder, structureTool } from 'sanity/structure';

export const myStructure = (S) => {
  return S.list()
    .title('ExtraHop')
    .items([
      ...S.documentTypeListItems().reverse().filter((listItem) => {
        const id = listItem.getId();
        if (!id) return true; 
        return !['samplePage', 'contactPage'].includes(id);
      }),
      // info
      S.listItem()
        .title('SamplePage')
        .icon(CaseIcon)
        .child(
          S.document()
            .schemaType('samplePage')
            .documentId('samplePage')
        ),
      //contact
      S.listItem()
      .title('ContactPage')
      .icon(CaseIcon)
      .child(
        S.document()
          .schemaType('contactPage')
          .documentId('contactPage')
      ),
    ]);
};

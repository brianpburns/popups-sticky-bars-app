import React from 'react';
import { component, Schema } from 'ub-shared';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

export const Component = component({
  componentTypeId: 'popupsStickyBars',
  displayName: 'Popups/Sticky Bars embed script',
  tags: ['head-script'],
  schema: Schema.object({
    embedCode: Schema.string().noControls(),
  }),
  Component({ data: { embedCode }, mode }: ComponentProps<{ embedCode: string }>) {
    if (mode.type !== 'publish' || !embedCode) {
      return null;
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `${embedCode}`,
        }}
      />
    );
  },
  version: 0,
});

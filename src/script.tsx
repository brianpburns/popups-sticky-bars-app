import React from 'react';
import { component, Schema } from 'ub-shared';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';

export const Component = component({
  componentTypeId: 'popupsStickyBars',
  displayName: 'Popups/Sticky Bars embed script',
  tags: ['head-script'],
  schema: Schema.object({
    id: Schema.string().noControls(),
  }),
  Component({ data, mode }: ComponentProps<{ id: string }>) {
    if (mode.type !== 'publish' || !data.id) {
      return null;
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.id}`,
        }}
      />
    );
  },
  version: 0,
});

import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleSectionComponentDveKartinki3366
  extends Schema.Component {
  collectionName: 'components_article_section_component_dve_kartinki_33_66_s';
  info: {
    displayName: '\u0414\u0432\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 (33%, 66%)';
    icon: 'grid';
  };
  attributes: {
    image_left: Attribute.Media;
    image_right: Attribute.Media & Attribute.Required;
  };
}

export interface ArticleSectionComponentDveKartinki5050
  extends Schema.Component {
  collectionName: 'components_article_section_component_dve_kartinki_50_50_s';
  info: {
    displayName: '\u0414\u0432\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 (50% | 50%)';
    icon: 'grid';
  };
  attributes: {
    image_one: Attribute.Media;
    image_two: Attribute.Media;
  };
}

export interface ArticleSectionComponentNachaloBloka extends Schema.Component {
  collectionName: 'components_article_section_component_nachalo_bloka';
  info: {
    displayName: '\u041D\u0430\u0447\u0430\u043B\u043E \u0431\u043B\u043E\u043A\u0430';
    icon: 'star';
    description: '';
  };
  attributes: {
    section_title: Attribute.String;
    section_anchor: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface ArticleSectionComponentOdnaKartinka100
  extends Schema.Component {
  collectionName: 'components_article_section_component_odna_kartinka_100_s';
  info: {
    displayName: '\u041E\u0434\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 (100%)';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ArticleSectionComponentOdnaKartinka67Sprava
  extends Schema.Component {
  collectionName: 'components_article_section_component_odna_kartinka_67_sprava_s';
  info: {
    displayName: '\u041E\u0434\u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 (67% \u0441\u043F\u0440\u0430\u0432\u0430)';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ArticleSectionComponentParagraf extends Schema.Component {
  collectionName: 'components_article_section_component_paragraf';
  info: {
    displayName: '\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444';
    icon: 'file';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-section-component.dve-kartinki-33-66': ArticleSectionComponentDveKartinki3366;
      'article-section-component.dve-kartinki-50-50': ArticleSectionComponentDveKartinki5050;
      'article-section-component.nachalo-bloka': ArticleSectionComponentNachaloBloka;
      'article-section-component.odna-kartinka-100': ArticleSectionComponentOdnaKartinka100;
      'article-section-component.odna-kartinka-67-sprava': ArticleSectionComponentOdnaKartinka67Sprava;
      'article-section-component.paragraf': ArticleSectionComponentParagraf;
    }
  }
}

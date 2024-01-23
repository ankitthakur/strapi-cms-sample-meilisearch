import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoriesCategory extends Schema.Component {
  collectionName: 'components_categories_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CategoriesMinistriesCategory extends Schema.Component {
  collectionName: 'components_categories_ministries_categories';
  info: {
    displayName: 'ministriesCategory';
    description: '';
  };
  attributes: {
    menu: Attribute.Component<'categories.category'>;
    categoryType: Attribute.Enumeration<
      ['ministries', 'media-main-service', 'all-media', 'series', 'events']
    >;
    series: Attribute.Component<'series.series-detail', true>;
    link: Attribute.Component<'components.button', true>;
    secondaryLink: Attribute.Component<'components.button', true>;
    blog_part_2: Attribute.RichText;
    blog_part_3: Attribute.RichText;
    blog: Attribute.RichText;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonTitle: Attribute.String;
    action: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface EpisodeEpisode extends Schema.Component {
  collectionName: 'components_episode_episodes';
  info: {
    displayName: 'episode';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    speaker: Attribute.String;
    eventDate: Attribute.DateTime;
    passage: Attribute.String;
    media: Attribute.Media;
    mediaThumbnail: Attribute.Media;
    transcript: Attribute.Text & Attribute.Private;
    service: Attribute.Enumeration<['AM Service', 'PM Service']>;
  };
}

export interface SeriesSeriesDetail extends Schema.Component {
  collectionName: 'components_series_series_details';
  info: {
    displayName: 'series-detail';
    description: '';
  };
  attributes: {
    startDate: Attribute.Date;
    endDate: Attribute.Date;
    title: Attribute.String;
    episodes: Attribute.Relation<
      'series.series-detail',
      'oneToMany',
      'api::episode.episode'
    >;
    speakers: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'categories.category': CategoriesCategory;
      'categories.ministries-category': CategoriesMinistriesCategory;
      'components.button': ComponentsButton;
      'episode.episode': EpisodeEpisode;
      'series.series-detail': SeriesSeriesDetail;
    }
  }
}

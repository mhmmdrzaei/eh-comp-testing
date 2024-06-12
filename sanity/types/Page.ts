import { PortableTextBlock } from "sanity";

export type Social = {
  _type: 'social',
  socialName: string,
  socialURL: string,
};

export type Contact = {
  _type: 'contact',
  urlLabel: string,
  urlurl: string,
};

export type Page = {
  _id: string,
  title: string,
  socialInfo: Social[],

  information: PortableTextBlock[],

};

import { useQuery, UseQueryOptions } from 'react-query';
// import { customFetcher } from '@/lib/utils';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type IAggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type IAsset = INode & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IAsset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: ILocale;
  /** Get the other localizations for this document */
  localizations: Array<IAsset>;
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** The file size */
  size: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: IStage;
  thumbnailBlog: Array<IBlog>;
  thumbnailProject: Array<IProject>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<IUser>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type IAssetCreatedAtArgs = {
  variation?: ISystemDateTimeFieldVariation;
};


/** Asset system model */
export type IAssetCreatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Asset system model */
export type IAssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** Asset system model */
export type IAssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<IStage>;
};


/** Asset system model */
export type IAssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<ILocale>;
};


/** Asset system model */
export type IAssetPublishedAtArgs = {
  variation?: ISystemDateTimeFieldVariation;
};


/** Asset system model */
export type IAssetPublishedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Asset system model */
export type IAssetScheduledInArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IScheduledOperationWhereInput>;
};


/** Asset system model */
export type IAssetThumbnailBlogArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  orderBy: Maybe<IBlogOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IBlogWhereInput>;
};


/** Asset system model */
export type IAssetThumbnailProjectArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  orderBy: Maybe<IProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IProjectWhereInput>;
};


/** Asset system model */
export type IAssetUpdatedAtArgs = {
  variation?: ISystemDateTimeFieldVariation;
};


/** Asset system model */
export type IAssetUpdatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Asset system model */
export type IAssetUrlArgs = {
  transformation: Maybe<IAssetTransformationInput>;
};

export type IAssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: IAssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type IAssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IAssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IAssetCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<IAssetCreateLocalizationsInput>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  thumbnailBlog: Maybe<IBlogCreateManyInlineInput>;
  thumbnailProject: Maybe<IProjectCreateManyInlineInput>;
  updatedAt: Maybe<Scalars['DateTime']>;
  width: Maybe<Scalars['Float']>;
};

export type IAssetCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  width: Maybe<Scalars['Float']>;
};

export type IAssetCreateLocalizationInput = {
  /** Localization input */
  data: IAssetCreateLocalizationDataInput;
  locale: ILocale;
};

export type IAssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<IAssetCreateLocalizationInput>>;
};

export type IAssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: Maybe<Array<IAssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create: Maybe<Array<IAssetCreateInput>>;
};

export type IAssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: Maybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: Maybe<IAssetCreateInput>;
};

/** An edge in a connection. */
export type IAssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IAsset;
};

/** Identifies documents */
export type IAssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  thumbnailBlog_every: Maybe<IBlogWhereInput>;
  thumbnailBlog_none: Maybe<IBlogWhereInput>;
  thumbnailBlog_some: Maybe<IBlogWhereInput>;
  thumbnailProject_every: Maybe<IProjectWhereInput>;
  thumbnailProject_none: Maybe<IProjectWhereInput>;
  thumbnailProject_some: Maybe<IProjectWhereInput>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

export enum IAssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type IAssetTransformationInput = {
  document: Maybe<IDocumentTransformationInput>;
  image: Maybe<IImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: Maybe<Scalars['Boolean']>;
};

export type IAssetUpdateInput = {
  fileName: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations: Maybe<IAssetUpdateLocalizationsInput>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  thumbnailBlog: Maybe<IBlogUpdateManyInlineInput>;
  thumbnailProject: Maybe<IProjectUpdateManyInlineInput>;
  width: Maybe<Scalars['Float']>;
};

export type IAssetUpdateLocalizationDataInput = {
  fileName: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type IAssetUpdateLocalizationInput = {
  data: IAssetUpdateLocalizationDataInput;
  locale: ILocale;
};

export type IAssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<IAssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<ILocale>>;
  /** Localizations to update */
  update: Maybe<Array<IAssetUpdateLocalizationInput>>;
  upsert: Maybe<Array<IAssetUpsertLocalizationInput>>;
};

export type IAssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: Maybe<Array<IAssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create: Maybe<Array<IAssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete: Maybe<Array<IAssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: Maybe<Array<IAssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: Maybe<Array<IAssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: Maybe<Array<IAssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: Maybe<Array<IAssetUpsertWithNestedWhereUniqueInput>>;
};

export type IAssetUpdateManyInput = {
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations: Maybe<IAssetUpdateManyLocalizationsInput>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type IAssetUpdateManyLocalizationDataInput = {
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type IAssetUpdateManyLocalizationInput = {
  data: IAssetUpdateManyLocalizationDataInput;
  locale: ILocale;
};

export type IAssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<IAssetUpdateManyLocalizationInput>>;
};

export type IAssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IAssetUpdateManyInput;
  /** Document search */
  where: IAssetWhereInput;
};

export type IAssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: Maybe<IAssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: Maybe<IAssetCreateInput>;
  /** Delete currently connected Asset document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update: Maybe<IAssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: Maybe<IAssetUpsertWithNestedWhereUniqueInput>;
};

export type IAssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IAssetUpdateInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
};

export type IAssetUpsertInput = {
  /** Create document if it didn't exist */
  create: IAssetCreateInput;
  /** Update document if it exists */
  update: IAssetUpdateInput;
};

export type IAssetUpsertLocalizationInput = {
  create: IAssetCreateLocalizationDataInput;
  locale: ILocale;
  update: IAssetUpdateLocalizationDataInput;
};

export type IAssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IAssetUpsertInput;
  /** Unique document search */
  where: IAssetWhereUniqueInput;
};

/** Identifies documents */
export type IAssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IAssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IAssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IAssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  fileName: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in: Maybe<Array<Scalars['Float']>>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  mimeType: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  size: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in: Maybe<Array<Scalars['Float']>>;
  thumbnailBlog_every: Maybe<IBlogWhereInput>;
  thumbnailBlog_none: Maybe<IBlogWhereInput>;
  thumbnailBlog_some: Maybe<IBlogWhereInput>;
  thumbnailProject_every: Maybe<IProjectWhereInput>;
  thumbnailProject_none: Maybe<IProjectWhereInput>;
  thumbnailProject_some: Maybe<IProjectWhereInput>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
  width: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type IAssetWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type IBatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type IBlog = INode & {
  __typename?: 'Blog';
  content: IRichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IBlog>;
  featured: Maybe<Scalars['Boolean']>;
  /** List of Blog versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  introduction: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<IUser>;
  readTime: Scalars['String'];
  scheduledIn: Array<IScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: IStage;
  tags: Array<ITag>;
  thumbnail: IAsset;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<IUser>;
};


export type IBlogCreatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


export type IBlogDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


export type IBlogHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<IStage>;
};


export type IBlogPublishedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


export type IBlogScheduledInArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IScheduledOperationWhereInput>;
};


export type IBlogTagsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  orderBy: Maybe<ITagOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<ITagWhereInput>;
};


export type IBlogThumbnailArgs = {
  locales: Maybe<Array<ILocale>>;
};


export type IBlogUpdatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};

export type IBlogConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: IBlogWhereUniqueInput;
};

/** A connection to a list of items. */
export type IBlogConnection = {
  __typename?: 'BlogConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IBlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IBlogCreateInput = {
  content: Scalars['RichTextAST'];
  createdAt: Maybe<Scalars['DateTime']>;
  featured: Maybe<Scalars['Boolean']>;
  introduction: Scalars['String'];
  readTime: Scalars['String'];
  slug: Scalars['String'];
  tags: Maybe<ITagCreateManyInlineInput>;
  thumbnail: IAssetCreateOneInlineInput;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type IBlogCreateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect: Maybe<Array<IBlogWhereUniqueInput>>;
  /** Create and connect multiple existing Blog documents */
  create: Maybe<Array<IBlogCreateInput>>;
};

export type IBlogCreateOneInlineInput = {
  /** Connect one existing Blog document */
  connect: Maybe<IBlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create: Maybe<IBlogCreateInput>;
};

/** An edge in a connection. */
export type IBlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IBlog;
};

/** Identifies documents */
export type IBlogManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IBlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IBlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IBlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  featured: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  featured_not: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  introduction: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  introduction_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  readTime: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readTime_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readTime_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readTime_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readTime_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readTime_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readTime_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readTime_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  readTime_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readTime_starts_with: Maybe<Scalars['String']>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  tags_every: Maybe<ITagWhereInput>;
  tags_none: Maybe<ITagWhereInput>;
  tags_some: Maybe<ITagWhereInput>;
  thumbnail: Maybe<IAssetWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

export enum IBlogOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReadTimeAsc = 'readTime_ASC',
  ReadTimeDesc = 'readTime_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type IBlogUpdateInput = {
  content: Maybe<Scalars['RichTextAST']>;
  featured: Maybe<Scalars['Boolean']>;
  introduction: Maybe<Scalars['String']>;
  readTime: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  tags: Maybe<ITagUpdateManyInlineInput>;
  thumbnail: Maybe<IAssetUpdateOneInlineInput>;
  title: Maybe<Scalars['String']>;
};

export type IBlogUpdateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect: Maybe<Array<IBlogConnectInput>>;
  /** Create and connect multiple Blog documents */
  create: Maybe<Array<IBlogCreateInput>>;
  /** Delete multiple Blog documents */
  delete: Maybe<Array<IBlogWhereUniqueInput>>;
  /** Disconnect multiple Blog documents */
  disconnect: Maybe<Array<IBlogWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Blog documents */
  set: Maybe<Array<IBlogWhereUniqueInput>>;
  /** Update multiple Blog documents */
  update: Maybe<Array<IBlogUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blog documents */
  upsert: Maybe<Array<IBlogUpsertWithNestedWhereUniqueInput>>;
};

export type IBlogUpdateManyInput = {
  content: Maybe<Scalars['RichTextAST']>;
  featured: Maybe<Scalars['Boolean']>;
  introduction: Maybe<Scalars['String']>;
  readTime: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type IBlogUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IBlogUpdateManyInput;
  /** Document search */
  where: IBlogWhereInput;
};

export type IBlogUpdateOneInlineInput = {
  /** Connect existing Blog document */
  connect: Maybe<IBlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create: Maybe<IBlogCreateInput>;
  /** Delete currently connected Blog document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Blog document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Blog document */
  update: Maybe<IBlogUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blog document */
  upsert: Maybe<IBlogUpsertWithNestedWhereUniqueInput>;
};

export type IBlogUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IBlogUpdateInput;
  /** Unique document search */
  where: IBlogWhereUniqueInput;
};

export type IBlogUpsertInput = {
  /** Create document if it didn't exist */
  create: IBlogCreateInput;
  /** Update document if it exists */
  update: IBlogUpdateInput;
};

export type IBlogUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IBlogUpsertInput;
  /** Unique document search */
  where: IBlogWhereUniqueInput;
};

/** Identifies documents */
export type IBlogWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IBlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IBlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IBlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  featured: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  featured_not: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  introduction: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  introduction_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  readTime: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readTime_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readTime_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readTime_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readTime_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readTime_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readTime_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readTime_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  readTime_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readTime_starts_with: Maybe<Scalars['String']>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  tags_every: Maybe<ITagWhereInput>;
  tags_none: Maybe<ITagWhereInput>;
  tags_some: Maybe<ITagWhereInput>;
  thumbnail: Maybe<IAssetWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

/** References Blog record uniquely */
export type IBlogWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type IColor = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: IRgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type IColorInput = {
  hex: Maybe<Scalars['Hex']>;
  rgba: Maybe<IRgbaInput>;
};

export enum IColorScheme {
  BlackAlpha = 'blackAlpha',
  Blue = 'blue',
  Cyan = 'cyan',
  Facebook = 'facebook',
  Gray = 'gray',
  Green = 'green',
  Linkedin = 'linkedin',
  Messenger = 'messenger',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Teal = 'teal',
  Telegram = 'telegram',
  Twitter = 'twitter',
  Whatsapp = 'whatsapp',
  WhiteAlpha = 'whiteAlpha',
  Yellow = 'yellow'
}

export type IConnectPositionInput = {
  /** Connect document after specified document */
  after: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start: Maybe<Scalars['Boolean']>;
};

export enum IDocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type IDocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format: Maybe<IDocumentFileTypes>;
};

/** Transformations for Documents */
export type IDocumentTransformationInput = {
  /** Changes the output for the file. */
  output: Maybe<IDocumentOutputInput>;
};

export type IDocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
};

export enum IImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type IImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: Maybe<IImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type IImageTransformationInput = {
  /** Resizes the image */
  resize: Maybe<IImageResizeInput>;
};

/** Locale system enumeration */
export enum ILocale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type ILocation = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type ILocationDistanceArgs = {
  from: ILocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type ILocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset: Maybe<IAsset>;
  /** Create one blog */
  createBlog: Maybe<IBlog>;
  /** Create one project */
  createProject: Maybe<IProject>;
  /** Create one scheduledRelease */
  createScheduledRelease: Maybe<IScheduledRelease>;
  /** Create one tag */
  createTag: Maybe<ITag>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset: Maybe<IAsset>;
  /** Delete one blog from _all_ existing stages. Returns deleted document. */
  deleteBlog: Maybe<IBlog>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: IBatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: IAssetConnection;
  /**
   * Delete many Blog documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
   */
  deleteManyBlogs: IBatchPayload;
  /** Delete many Blog documents, return deleted documents */
  deleteManyBlogsConnection: IBlogConnection;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: IBatchPayload;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: IProjectConnection;
  /**
   * Delete many Tag documents
   * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
   */
  deleteManyTags: IBatchPayload;
  /** Delete many Tag documents, return deleted documents */
  deleteManyTagsConnection: ITagConnection;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject: Maybe<IProject>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation: Maybe<IScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease: Maybe<IScheduledRelease>;
  /** Delete one tag from _all_ existing stages. Returns deleted document. */
  deleteTag: Maybe<ITag>;
  /** Publish one asset */
  publishAsset: Maybe<IAsset>;
  /** Publish one blog */
  publishBlog: Maybe<IBlog>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: IBatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: IAssetConnection;
  /**
   * Publish many Blog documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
   */
  publishManyBlogs: IBatchPayload;
  /** Publish many Blog documents */
  publishManyBlogsConnection: IBlogConnection;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: IBatchPayload;
  /** Publish many Project documents */
  publishManyProjectsConnection: IProjectConnection;
  /**
   * Publish many Tag documents
   * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
   */
  publishManyTags: IBatchPayload;
  /** Publish many Tag documents */
  publishManyTagsConnection: ITagConnection;
  /** Publish one project */
  publishProject: Maybe<IProject>;
  /** Publish one tag */
  publishTag: Maybe<ITag>;
  /** Schedule to publish one asset */
  schedulePublishAsset: Maybe<IAsset>;
  /** Schedule to publish one blog */
  schedulePublishBlog: Maybe<IBlog>;
  /** Schedule to publish one project */
  schedulePublishProject: Maybe<IProject>;
  /** Schedule to publish one tag */
  schedulePublishTag: Maybe<ITag>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset: Maybe<IAsset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlog: Maybe<IBlog>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject: Maybe<IProject>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTag: Maybe<ITag>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset: Maybe<IAsset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlog: Maybe<IBlog>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: IBatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: IAssetConnection;
  /**
   * Unpublish many Blog documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
   */
  unpublishManyBlogs: IBatchPayload;
  /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogsConnection: IBlogConnection;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: IBatchPayload;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: IProjectConnection;
  /**
   * Unpublish many Tag documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
   */
  unpublishManyTags: IBatchPayload;
  /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTagsConnection: ITagConnection;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject: Maybe<IProject>;
  /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTag: Maybe<ITag>;
  /** Update one asset */
  updateAsset: Maybe<IAsset>;
  /** Update one blog */
  updateBlog: Maybe<IBlog>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: IBatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: IAssetConnection;
  /**
   * Update many blogs
   * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
   */
  updateManyBlogs: IBatchPayload;
  /** Update many Blog documents */
  updateManyBlogsConnection: IBlogConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: IBatchPayload;
  /** Update many Project documents */
  updateManyProjectsConnection: IProjectConnection;
  /**
   * Update many tags
   * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
   */
  updateManyTags: IBatchPayload;
  /** Update many Tag documents */
  updateManyTagsConnection: ITagConnection;
  /** Update one project */
  updateProject: Maybe<IProject>;
  /** Update one scheduledRelease */
  updateScheduledRelease: Maybe<IScheduledRelease>;
  /** Update one tag */
  updateTag: Maybe<ITag>;
  /** Upsert one asset */
  upsertAsset: Maybe<IAsset>;
  /** Upsert one blog */
  upsertBlog: Maybe<IBlog>;
  /** Upsert one project */
  upsertProject: Maybe<IProject>;
  /** Upsert one tag */
  upsertTag: Maybe<ITag>;
};


export type IMutationCreateAssetArgs = {
  data: IAssetCreateInput;
};


export type IMutationCreateBlogArgs = {
  data: IBlogCreateInput;
};


export type IMutationCreateProjectArgs = {
  data: IProjectCreateInput;
};


export type IMutationCreateScheduledReleaseArgs = {
  data: IScheduledReleaseCreateInput;
};


export type IMutationCreateTagArgs = {
  data: ITagCreateInput;
};


export type IMutationDeleteAssetArgs = {
  where: IAssetWhereUniqueInput;
};


export type IMutationDeleteBlogArgs = {
  where: IBlogWhereUniqueInput;
};


export type IMutationDeleteManyAssetsArgs = {
  where: Maybe<IAssetManyWhereInput>;
};


export type IMutationDeleteManyAssetsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IAssetManyWhereInput>;
};


export type IMutationDeleteManyBlogsArgs = {
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationDeleteManyBlogsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationDeleteManyProjectsArgs = {
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationDeleteManyProjectsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationDeleteManyTagsArgs = {
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationDeleteManyTagsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationDeleteProjectArgs = {
  where: IProjectWhereUniqueInput;
};


export type IMutationDeleteScheduledOperationArgs = {
  where: IScheduledOperationWhereUniqueInput;
};


export type IMutationDeleteScheduledReleaseArgs = {
  where: IScheduledReleaseWhereUniqueInput;
};


export type IMutationDeleteTagArgs = {
  where: ITagWhereUniqueInput;
};


export type IMutationPublishAssetArgs = {
  locales: Maybe<Array<ILocale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type IMutationPublishBlogArgs = {
  to?: Array<IStage>;
  where: IBlogWhereUniqueInput;
};


export type IMutationPublishManyAssetsArgs = {
  locales: Maybe<Array<ILocale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<IStage>;
  where: Maybe<IAssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type IMutationPublishManyAssetsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Maybe<IStage>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip: Maybe<Scalars['Int']>;
  to?: Array<IStage>;
  where: Maybe<IAssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type IMutationPublishManyBlogsArgs = {
  to?: Array<IStage>;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationPublishManyBlogsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Maybe<IStage>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  to?: Array<IStage>;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationPublishManyProjectsArgs = {
  to?: Array<IStage>;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationPublishManyProjectsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Maybe<IStage>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  to?: Array<IStage>;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationPublishManyTagsArgs = {
  to?: Array<IStage>;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationPublishManyTagsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Maybe<IStage>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  to?: Array<IStage>;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationPublishProjectArgs = {
  to?: Array<IStage>;
  where: IProjectWhereUniqueInput;
};


export type IMutationPublishTagArgs = {
  to?: Array<IStage>;
  where: ITagWhereUniqueInput;
};


export type IMutationSchedulePublishAssetArgs = {
  locales: Maybe<Array<ILocale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IAssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type IMutationSchedulePublishBlogArgs = {
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IBlogWhereUniqueInput;
};


export type IMutationSchedulePublishProjectArgs = {
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  to?: Array<IStage>;
  where: IProjectWhereUniqueInput;
};


export type IMutationSchedulePublishTagArgs = {
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  to?: Array<IStage>;
  where: ITagWhereUniqueInput;
};


export type IMutationScheduleUnpublishAssetArgs = {
  from?: Array<IStage>;
  locales: Maybe<Array<ILocale>>;
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
};


export type IMutationScheduleUnpublishBlogArgs = {
  from?: Array<IStage>;
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  where: IBlogWhereUniqueInput;
};


export type IMutationScheduleUnpublishProjectArgs = {
  from?: Array<IStage>;
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  where: IProjectWhereUniqueInput;
};


export type IMutationScheduleUnpublishTagArgs = {
  from?: Array<IStage>;
  releaseAt: Maybe<Scalars['DateTime']>;
  releaseId: Maybe<Scalars['String']>;
  where: ITagWhereUniqueInput;
};


export type IMutationUnpublishAssetArgs = {
  from?: Array<IStage>;
  locales: Maybe<Array<ILocale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: IAssetWhereUniqueInput;
};


export type IMutationUnpublishBlogArgs = {
  from?: Array<IStage>;
  where: IBlogWhereUniqueInput;
};


export type IMutationUnpublishManyAssetsArgs = {
  from?: Array<IStage>;
  locales: Maybe<Array<ILocale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: Maybe<IAssetManyWhereInput>;
};


export type IMutationUnpublishManyAssetsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Array<IStage>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  skip: Maybe<Scalars['Int']>;
  stage?: Maybe<IStage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: Maybe<IAssetManyWhereInput>;
};


export type IMutationUnpublishManyBlogsArgs = {
  from?: Array<IStage>;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationUnpublishManyBlogsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Array<IStage>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  stage?: Maybe<IStage>;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationUnpublishManyProjectsArgs = {
  from?: Array<IStage>;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationUnpublishManyProjectsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Array<IStage>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  stage?: Maybe<IStage>;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationUnpublishManyTagsArgs = {
  from?: Array<IStage>;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationUnpublishManyTagsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  first: Maybe<Scalars['Int']>;
  from?: Array<IStage>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  stage?: Maybe<IStage>;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationUnpublishProjectArgs = {
  from?: Array<IStage>;
  where: IProjectWhereUniqueInput;
};


export type IMutationUnpublishTagArgs = {
  from?: Array<IStage>;
  where: ITagWhereUniqueInput;
};


export type IMutationUpdateAssetArgs = {
  data: IAssetUpdateInput;
  where: IAssetWhereUniqueInput;
};


export type IMutationUpdateBlogArgs = {
  data: IBlogUpdateInput;
  where: IBlogWhereUniqueInput;
};


export type IMutationUpdateManyAssetsArgs = {
  data: IAssetUpdateManyInput;
  where: Maybe<IAssetManyWhereInput>;
};


export type IMutationUpdateManyAssetsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  data: IAssetUpdateManyInput;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IAssetManyWhereInput>;
};


export type IMutationUpdateManyBlogsArgs = {
  data: IBlogUpdateManyInput;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationUpdateManyBlogsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  data: IBlogUpdateManyInput;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IBlogManyWhereInput>;
};


export type IMutationUpdateManyProjectsArgs = {
  data: IProjectUpdateManyInput;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationUpdateManyProjectsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  data: IProjectUpdateManyInput;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IProjectManyWhereInput>;
};


export type IMutationUpdateManyTagsArgs = {
  data: ITagUpdateManyInput;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationUpdateManyTagsConnectionArgs = {
  after: Maybe<Scalars['ID']>;
  before: Maybe<Scalars['ID']>;
  data: ITagUpdateManyInput;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<ITagManyWhereInput>;
};


export type IMutationUpdateProjectArgs = {
  data: IProjectUpdateInput;
  where: IProjectWhereUniqueInput;
};


export type IMutationUpdateScheduledReleaseArgs = {
  data: IScheduledReleaseUpdateInput;
  where: IScheduledReleaseWhereUniqueInput;
};


export type IMutationUpdateTagArgs = {
  data: ITagUpdateInput;
  where: ITagWhereUniqueInput;
};


export type IMutationUpsertAssetArgs = {
  upsert: IAssetUpsertInput;
  where: IAssetWhereUniqueInput;
};


export type IMutationUpsertBlogArgs = {
  upsert: IBlogUpsertInput;
  where: IBlogWhereUniqueInput;
};


export type IMutationUpsertProjectArgs = {
  upsert: IProjectUpsertInput;
  where: IProjectWhereUniqueInput;
};


export type IMutationUpsertTagArgs = {
  upsert: ITagUpsertInput;
  where: ITagWhereUniqueInput;
};

/** An object with an ID */
export type INode = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: IStage;
};

/** Information about pagination in a connection. */
export type IPageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
};

export type IProject = INode & {
  __typename?: 'Project';
  content: IRichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<IProject>;
  featured: Maybe<Scalars['Boolean']>;
  /** List of Project versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  introduction: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<IUser>;
  readTime: Scalars['String'];
  scheduledIn: Array<IScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: IStage;
  tags: Array<ITag>;
  thumbnail: IAsset;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<IUser>;
};


export type IProjectCreatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


export type IProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


export type IProjectHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<IStage>;
};


export type IProjectPublishedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


export type IProjectScheduledInArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IScheduledOperationWhereInput>;
};


export type IProjectTagsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  orderBy: Maybe<ITagOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<ITagWhereInput>;
};


export type IProjectThumbnailArgs = {
  locales: Maybe<Array<ILocale>>;
};


export type IProjectUpdatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};

export type IProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: IProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type IProjectConnection = {
  __typename?: 'ProjectConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IProjectCreateInput = {
  content: Scalars['RichTextAST'];
  createdAt: Maybe<Scalars['DateTime']>;
  featured: Maybe<Scalars['Boolean']>;
  introduction: Scalars['String'];
  readTime: Scalars['String'];
  slug: Scalars['String'];
  tags: Maybe<ITagCreateManyInlineInput>;
  thumbnail: IAssetCreateOneInlineInput;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type IProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect: Maybe<Array<IProjectWhereUniqueInput>>;
  /** Create and connect multiple existing Project documents */
  create: Maybe<Array<IProjectCreateInput>>;
};

export type IProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect: Maybe<IProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create: Maybe<IProjectCreateInput>;
};

/** An edge in a connection. */
export type IProjectEdge = {
  __typename?: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IProject;
};

/** Identifies documents */
export type IProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  featured: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  featured_not: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  introduction: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  introduction_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  readTime: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readTime_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readTime_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readTime_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readTime_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readTime_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readTime_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readTime_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  readTime_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readTime_starts_with: Maybe<Scalars['String']>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  tags_every: Maybe<ITagWhereInput>;
  tags_none: Maybe<ITagWhereInput>;
  tags_some: Maybe<ITagWhereInput>;
  thumbnail: Maybe<IAssetWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

export enum IProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroductionAsc = 'introduction_ASC',
  IntroductionDesc = 'introduction_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReadTimeAsc = 'readTime_ASC',
  ReadTimeDesc = 'readTime_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type IProjectUpdateInput = {
  content: Maybe<Scalars['RichTextAST']>;
  featured: Maybe<Scalars['Boolean']>;
  introduction: Maybe<Scalars['String']>;
  readTime: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  tags: Maybe<ITagUpdateManyInlineInput>;
  thumbnail: Maybe<IAssetUpdateOneInlineInput>;
  title: Maybe<Scalars['String']>;
};

export type IProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect: Maybe<Array<IProjectConnectInput>>;
  /** Create and connect multiple Project documents */
  create: Maybe<Array<IProjectCreateInput>>;
  /** Delete multiple Project documents */
  delete: Maybe<Array<IProjectWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect: Maybe<Array<IProjectWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set: Maybe<Array<IProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update: Maybe<Array<IProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert: Maybe<Array<IProjectUpsertWithNestedWhereUniqueInput>>;
};

export type IProjectUpdateManyInput = {
  content: Maybe<Scalars['RichTextAST']>;
  featured: Maybe<Scalars['Boolean']>;
  introduction: Maybe<Scalars['String']>;
  readTime: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type IProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IProjectUpdateManyInput;
  /** Document search */
  where: IProjectWhereInput;
};

export type IProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect: Maybe<IProjectWhereUniqueInput>;
  /** Create and connect one Project document */
  create: Maybe<IProjectCreateInput>;
  /** Delete currently connected Project document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Project document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Project document */
  update: Maybe<IProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert: Maybe<IProjectUpsertWithNestedWhereUniqueInput>;
};

export type IProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IProjectUpdateInput;
  /** Unique document search */
  where: IProjectWhereUniqueInput;
};

export type IProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: IProjectCreateInput;
  /** Update document if it exists */
  update: IProjectUpdateInput;
};

export type IProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IProjectUpsertInput;
  /** Unique document search */
  where: IProjectWhereUniqueInput;
};

/** Identifies documents */
export type IProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IProjectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  featured: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  featured_not: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  introduction: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  introduction_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  readTime: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readTime_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readTime_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readTime_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readTime_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readTime_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readTime_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readTime_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  readTime_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readTime_starts_with: Maybe<Scalars['String']>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  tags_every: Maybe<ITagWhereInput>;
  tags_none: Maybe<ITagWhereInput>;
  tags_some: Maybe<ITagWhereInput>;
  thumbnail: Maybe<IAssetWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

/** References Project record uniquely */
export type IProjectWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type IPublishLocaleInput = {
  /** Locales to publish */
  locale: ILocale;
  /** Stages to publish selected locales to */
  stages: Array<IStage>;
};

export type IQuery = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset: Maybe<IAsset>;
  /** Retrieve document version */
  assetVersion: Maybe<IDocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<IAsset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: IAssetConnection;
  /** Retrieve a single blog */
  blog: Maybe<IBlog>;
  /** Retrieve document version */
  blogVersion: Maybe<IDocumentVersion>;
  /** Retrieve multiple blogs */
  blogs: Array<IBlog>;
  /** Retrieve multiple blogs using the Relay connection interface */
  blogsConnection: IBlogConnection;
  /** Fetches an object given its ID */
  node: Maybe<INode>;
  /** Retrieve a single project */
  project: Maybe<IProject>;
  /** Retrieve document version */
  projectVersion: Maybe<IDocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<IProject>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: IProjectConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation: Maybe<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<IScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: IScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease: Maybe<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<IScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: IScheduledReleaseConnection;
  /** Retrieve a single tag */
  tag: Maybe<ITag>;
  /** Retrieve document version */
  tagVersion: Maybe<IDocumentVersion>;
  /** Retrieve multiple tags */
  tags: Array<ITag>;
  /** Retrieve multiple tags using the Relay connection interface */
  tagsConnection: ITagConnection;
  /** Retrieve a single user */
  user: Maybe<IUser>;
  /** Retrieve multiple users */
  users: Array<IUser>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: IUserConnection;
};


export type IQueryAssetArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IAssetWhereUniqueInput;
};


export type IQueryAssetVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryAssetsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IAssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IAssetWhereInput>;
};


export type IQueryAssetsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IAssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IAssetWhereInput>;
};


export type IQueryBlogArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IBlogWhereUniqueInput;
};


export type IQueryBlogVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryBlogsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IBlogOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IBlogWhereInput>;
};


export type IQueryBlogsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IBlogOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IBlogWhereInput>;
};


export type IQueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<ILocale>;
  stage?: IStage;
};


export type IQueryProjectArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IProjectWhereUniqueInput;
};


export type IQueryProjectVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryProjectsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IProjectWhereInput>;
};


export type IQueryProjectsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IProjectOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IProjectWhereInput>;
};


export type IQueryScheduledOperationArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledOperationWhereUniqueInput;
};


export type IQueryScheduledOperationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IScheduledOperationOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IScheduledOperationWhereInput>;
};


export type IQueryScheduledOperationsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IScheduledOperationOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IScheduledOperationWhereInput>;
};


export type IQueryScheduledReleaseArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IScheduledReleaseWhereUniqueInput;
};


export type IQueryScheduledReleasesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IScheduledReleaseOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IScheduledReleaseWhereInput>;
};


export type IQueryScheduledReleasesConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IScheduledReleaseOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IScheduledReleaseWhereInput>;
};


export type IQueryTagArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: ITagWhereUniqueInput;
};


export type IQueryTagVersionArgs = {
  where: IVersionWhereInput;
};


export type IQueryTagsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<ITagOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<ITagWhereInput>;
};


export type IQueryTagsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<ITagOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<ITagWhereInput>;
};


export type IQueryUserArgs = {
  locales?: Array<ILocale>;
  stage?: IStage;
  where: IUserWhereUniqueInput;
};


export type IQueryUsersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IUserOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IUserWhereInput>;
};


export type IQueryUsersConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<ILocale>;
  orderBy: Maybe<IUserOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: IStage;
  where: Maybe<IUserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type IRgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type IRgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type IRichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type IScheduledOperation = INode & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<IScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<IUser>;
  /** Operation description */
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledOperation>;
  /** Operation error message */
  errorMessage: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<IUser>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release: Maybe<IScheduledRelease>;
  /** System stage field */
  stage: IStage;
  /** operation Status */
  status: IScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<IUser>;
};


/** Scheduled Operation system model */
export type IScheduledOperationAffectedDocumentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  skip: Maybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type IScheduledOperationCreatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Scheduled Operation system model */
export type IScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** Scheduled Operation system model */
export type IScheduledOperationPublishedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Scheduled Operation system model */
export type IScheduledOperationReleaseArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Scheduled Operation system model */
export type IScheduledOperationUpdatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};

export type IScheduledOperationAffectedDocument = IAsset | IBlog | IProject | ITag;

export type IScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type IScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: Maybe<Array<IScheduledOperationWhereUniqueInput>>;
};

export type IScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect: Maybe<IScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type IScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledOperation;
};

/** Identifies documents */
export type IScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  release: Maybe<IScheduledReleaseWhereInput>;
  status: Maybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: Maybe<Array<IScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not: Maybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: Maybe<Array<IScheduledOperationStatus>>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

export enum IScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum IScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type IScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect: Maybe<Array<IScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect: Maybe<Array<IScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set: Maybe<Array<IScheduledOperationWhereUniqueInput>>;
};

export type IScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect: Maybe<IScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type IScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  release: Maybe<IScheduledReleaseWhereInput>;
  status: Maybe<IScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in: Maybe<Array<IScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not: Maybe<IScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in: Maybe<Array<IScheduledOperationStatus>>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type IScheduledOperationWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type IScheduledRelease = INode & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<IUser>;
  /** Release description */
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<IScheduledRelease>;
  /** Release error message */
  errorMessage: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<IScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<IUser>;
  /** Release date and time */
  releaseAt: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** Release Status */
  status: IScheduledReleaseStatus;
  /** Release Title */
  title: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<IUser>;
};


/** Scheduled Release system model */
export type IScheduledReleaseCreatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Scheduled Release system model */
export type IScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** Scheduled Release system model */
export type IScheduledReleaseOperationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  orderBy: Maybe<IScheduledOperationOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type IScheduledReleasePublishedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** Scheduled Release system model */
export type IScheduledReleaseUpdatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};

export type IScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: IScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type IScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IScheduledReleaseCreateInput = {
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  isActive: Maybe<Scalars['Boolean']>;
  releaseAt: Maybe<Scalars['DateTime']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type IScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: Maybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create: Maybe<Array<IScheduledReleaseCreateInput>>;
};

export type IScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect: Maybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: Maybe<IScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type IScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IScheduledRelease;
};

/** Identifies documents */
export type IScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: Maybe<Scalars['Boolean']>;
  isImplicit: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not: Maybe<Scalars['Boolean']>;
  operations_every: Maybe<IScheduledOperationWhereInput>;
  operations_none: Maybe<IScheduledOperationWhereInput>;
  operations_some: Maybe<IScheduledOperationWhereInput>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  releaseAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  status: Maybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: Maybe<Array<IScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not: Maybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: Maybe<Array<IScheduledReleaseStatus>>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

export enum IScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum IScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type IScheduledReleaseUpdateInput = {
  description: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  isActive: Maybe<Scalars['Boolean']>;
  releaseAt: Maybe<Scalars['DateTime']>;
  title: Maybe<Scalars['String']>;
};

export type IScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect: Maybe<Array<IScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create: Maybe<Array<IScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete: Maybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect: Maybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set: Maybe<Array<IScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update: Maybe<Array<IScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert: Maybe<Array<IScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type IScheduledReleaseUpdateManyInput = {
  description: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  isActive: Maybe<Scalars['Boolean']>;
  releaseAt: Maybe<Scalars['DateTime']>;
  title: Maybe<Scalars['String']>;
};

export type IScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: IScheduledReleaseUpdateManyInput;
  /** Document search */
  where: IScheduledReleaseWhereInput;
};

export type IScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect: Maybe<IScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create: Maybe<IScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update: Maybe<IScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert: Maybe<IScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type IScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: IScheduledReleaseUpdateInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
};

export type IScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: IScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: IScheduledReleaseUpdateInput;
};

export type IScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: IScheduledReleaseUpsertInput;
  /** Unique document search */
  where: IScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type IScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  errorMessage: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: Maybe<Scalars['Boolean']>;
  isImplicit: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not: Maybe<Scalars['Boolean']>;
  operations_every: Maybe<IScheduledOperationWhereInput>;
  operations_none: Maybe<IScheduledOperationWhereInput>;
  operations_some: Maybe<IScheduledOperationWhereInput>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  releaseAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  status: Maybe<IScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in: Maybe<Array<IScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not: Maybe<IScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in: Maybe<Array<IScheduledReleaseStatus>>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type IScheduledReleaseWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum IStage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum ISystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITag = INode & {
  __typename?: 'Tag';
  blog: Maybe<IBlog>;
  color: Scalars['String'];
  colorScheme: Maybe<IColorScheme>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy: Maybe<IUser>;
  /** Get the document in other stages */
  documentInStages: Array<ITag>;
  /** List of Tag versions */
  history: Array<IVersion>;
  /** The unique identifier */
  id: Scalars['ID'];
  project: Maybe<IProject>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<IUser>;
  scheduledIn: Array<IScheduledOperation>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<IUser>;
  value: Scalars['String'];
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagBlogArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagCreatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<IStage>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagProjectArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagPublishedByArgs = {
  locales: Maybe<Array<ILocale>>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagScheduledInArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<ILocale>>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<IScheduledOperationWhereInput>;
};


/** A way of categorizing blog posts, projects and bytes learning series.  */
export type ITagUpdatedByArgs = {
  locales: Maybe<Array<ILocale>>;
};

export type ITagConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: ITagWhereUniqueInput;
};

/** A connection to a list of items. */
export type ITagConnection = {
  __typename?: 'TagConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<ITagEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type ITagCreateInput = {
  blog: Maybe<IBlogCreateOneInlineInput>;
  color: Scalars['String'];
  colorScheme: Maybe<IColorScheme>;
  createdAt: Maybe<Scalars['DateTime']>;
  project: Maybe<IProjectCreateOneInlineInput>;
  updatedAt: Maybe<Scalars['DateTime']>;
  value: Scalars['String'];
};

export type ITagCreateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect: Maybe<Array<ITagWhereUniqueInput>>;
  /** Create and connect multiple existing Tag documents */
  create: Maybe<Array<ITagCreateInput>>;
};

export type ITagCreateOneInlineInput = {
  /** Connect one existing Tag document */
  connect: Maybe<ITagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create: Maybe<ITagCreateInput>;
};

/** An edge in a connection. */
export type ITagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ITag;
};

/** Identifies documents */
export type ITagManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<ITagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<ITagWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<ITagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  blog: Maybe<IBlogWhereInput>;
  color: Maybe<Scalars['String']>;
  colorScheme: Maybe<IColorScheme>;
  /** All values that are contained in given list. */
  colorScheme_in: Maybe<Array<IColorScheme>>;
  /** All values that are not equal to given value. */
  colorScheme_not: Maybe<IColorScheme>;
  /** All values that are not contained in given list. */
  colorScheme_not_in: Maybe<Array<IColorScheme>>;
  /** All values containing the given string. */
  color_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  color_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  color_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  color_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  color_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  color_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  color_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  color_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  color_starts_with: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  project: Maybe<IProjectWhereInput>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
  value: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  value_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with: Maybe<Scalars['String']>;
};

export enum ITagOrderByInput {
  ColorSchemeAsc = 'colorScheme_ASC',
  ColorSchemeDesc = 'colorScheme_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ITagUpdateInput = {
  blog: Maybe<IBlogUpdateOneInlineInput>;
  color: Maybe<Scalars['String']>;
  colorScheme: Maybe<IColorScheme>;
  project: Maybe<IProjectUpdateOneInlineInput>;
  value: Maybe<Scalars['String']>;
};

export type ITagUpdateManyInlineInput = {
  /** Connect multiple existing Tag documents */
  connect: Maybe<Array<ITagConnectInput>>;
  /** Create and connect multiple Tag documents */
  create: Maybe<Array<ITagCreateInput>>;
  /** Delete multiple Tag documents */
  delete: Maybe<Array<ITagWhereUniqueInput>>;
  /** Disconnect multiple Tag documents */
  disconnect: Maybe<Array<ITagWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Tag documents */
  set: Maybe<Array<ITagWhereUniqueInput>>;
  /** Update multiple Tag documents */
  update: Maybe<Array<ITagUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Tag documents */
  upsert: Maybe<Array<ITagUpsertWithNestedWhereUniqueInput>>;
};

export type ITagUpdateManyInput = {
  color: Maybe<Scalars['String']>;
  colorScheme: Maybe<IColorScheme>;
  value: Maybe<Scalars['String']>;
};

export type ITagUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ITagUpdateManyInput;
  /** Document search */
  where: ITagWhereInput;
};

export type ITagUpdateOneInlineInput = {
  /** Connect existing Tag document */
  connect: Maybe<ITagWhereUniqueInput>;
  /** Create and connect one Tag document */
  create: Maybe<ITagCreateInput>;
  /** Delete currently connected Tag document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Tag document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Tag document */
  update: Maybe<ITagUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tag document */
  upsert: Maybe<ITagUpsertWithNestedWhereUniqueInput>;
};

export type ITagUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ITagUpdateInput;
  /** Unique document search */
  where: ITagWhereUniqueInput;
};

export type ITagUpsertInput = {
  /** Create document if it didn't exist */
  create: ITagCreateInput;
  /** Update document if it exists */
  update: ITagUpdateInput;
};

export type ITagUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ITagUpsertInput;
  /** Unique document search */
  where: ITagWhereUniqueInput;
};

/** Identifies documents */
export type ITagWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<ITagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<ITagWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<ITagWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  blog: Maybe<IBlogWhereInput>;
  color: Maybe<Scalars['String']>;
  colorScheme: Maybe<IColorScheme>;
  /** All values that are contained in given list. */
  colorScheme_in: Maybe<Array<IColorScheme>>;
  /** All values that are not equal to given value. */
  colorScheme_not: Maybe<IColorScheme>;
  /** All values that are not contained in given list. */
  colorScheme_not_in: Maybe<Array<IColorScheme>>;
  /** All values containing the given string. */
  color_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  color_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  color_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  color_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  color_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  color_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  color_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  color_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  color_starts_with: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  createdBy: Maybe<IUserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  project: Maybe<IProjectWhereInput>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  publishedBy: Maybe<IUserWhereInput>;
  scheduledIn_every: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_none: Maybe<IScheduledOperationWhereInput>;
  scheduledIn_some: Maybe<IScheduledOperationWhereInput>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedBy: Maybe<IUserWhereInput>;
  value: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  value_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with: Maybe<Scalars['String']>;
};

/** References Tag record uniquely */
export type ITagWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type IUnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: ILocale;
  /** Stages to unpublish selected locales from */
  stages: Array<IStage>;
};

/** User system model */
export type IUser = INode & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<IUser>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: IUserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: IStage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type IUserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<IStage>;
};

export type IUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<IConnectPositionInput>;
  /** Document to connect */
  where: IUserWhereUniqueInput;
};

/** A connection to a list of items. */
export type IUserConnection = {
  __typename?: 'UserConnection';
  aggregate: IAggregate;
  /** A list of edges. */
  edges: Array<IUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: IPageInfo;
};

export type IUserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: Maybe<Array<IUserWhereUniqueInput>>;
};

export type IUserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect: Maybe<IUserWhereUniqueInput>;
};

/** An edge in a connection. */
export type IUserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IUser;
};

/** System User Kind */
export enum IUserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type IUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: Maybe<Scalars['Boolean']>;
  kind: Maybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in: Maybe<Array<IUserKind>>;
  /** All values that are not equal to given value. */
  kind_not: Maybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: Maybe<Array<IUserKind>>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
};

export enum IUserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type IUserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect: Maybe<Array<IUserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect: Maybe<Array<IUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set: Maybe<Array<IUserWhereUniqueInput>>;
};

export type IUserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect: Maybe<IUserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type IUserWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<IUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<IUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<IUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: Maybe<Scalars['Boolean']>;
  kind: Maybe<IUserKind>;
  /** All values that are contained in given list. */
  kind_in: Maybe<Array<IUserKind>>;
  /** All values that are not equal to given value. */
  kind_not: Maybe<IUserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: Maybe<Array<IUserKind>>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
  updatedAt: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type IUserWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type IVersion = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
};

export type IVersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: IStage;
};

export enum I_FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum I_MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum I_MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum I_OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum I_RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum I_RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum I_RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum I_SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type IGetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetAllBlogsQuery = { __typename?: 'Query', blogs: Array<{ __typename?: 'Blog', id: string, title: string, slug: string, featured: boolean | null, readTime: string, introduction: string, createdAt: any, content: { __typename?: 'RichText', markdown: string }, thumbnail: { __typename?: 'Asset', id: string, url: string }, tags: Array<{ __typename?: 'Tag', id: string, value: string, colorScheme: IColorScheme | null }> }> };

export type IBlogSummaryFragment = { __typename?: 'Blog', id: string, title: string, slug: string, introduction: string, featured: boolean | null, tags: Array<{ __typename?: 'Tag', value: string, colorScheme: IColorScheme | null }>, thumbnail: { __typename?: 'Asset', id: string, url: string } };

export const BlogSummaryFragmentDoc = `
    fragment BlogSummary on Blog {
  id
  title
  slug
  introduction
  featured
  tags {
    value
    colorScheme
  }
  thumbnail {
    id
    url
  }
}
    `;
export const GetAllBlogsDocument = `
    query getAllBlogs {
  blogs {
    id
    title
    slug
    featured
    readTime
    introduction
    content {
      markdown
    }
    thumbnail {
      id
      url
    }
    tags {
      id
      value
      colorScheme
    }
    createdAt
  }
}
    `;
export const useGetAllBlogsQuery = <
      TData = IGetAllBlogsQuery,
      TError = unknown
    >(
      variables?: IGetAllBlogsQueryVariables,
      options?: UseQueryOptions<IGetAllBlogsQuery, TError, TData>
    ) =>
    useQuery<IGetAllBlogsQuery, TError, TData>(
      variables === undefined ? ['getAllBlogs'] : ['getAllBlogs', variables],
      customFetcher<IGetAllBlogsQuery, IGetAllBlogsQueryVariables>(GetAllBlogsDocument, variables),
      options
    );
useGetAllBlogsQuery.getKey = (variables?: IGetAllBlogsQueryVariables) => variables === undefined ? ['getAllBlogs'] : ['getAllBlogs', variables];

useGetAllBlogsQuery.fetcher = (variables?: IGetAllBlogsQueryVariables) => customFetcher<IGetAllBlogsQuery, IGetAllBlogsQueryVariables>(GetAllBlogsDocument, variables);

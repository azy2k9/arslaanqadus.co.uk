import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
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

export type Aggregate = {
    __typename?: 'Aggregate';
    count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
    __typename?: 'Asset';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Asset>;
    /** The file name */
    fileName: Scalars['String'];
    /** The file handle */
    handle: Scalars['String'];
    /** The height of the file */
    height?: Maybe<Scalars['Float']>;
    /** List of Asset versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Asset>;
    /** The mime type of the file */
    mimeType?: Maybe<Scalars['String']>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** The file size */
    size?: Maybe<Scalars['Float']>;
    /** System stage field */
    stage: Stage;
    thumbnailBlog: Array<Blog>;
    thumbnailProject: Array<Project>;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String'];
    /** The file width */
    width?: Maybe<Scalars['Float']>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
    includeCurrent?: Scalars['Boolean'];
    locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetThumbnailBlogArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<BlogOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<BlogWhereInput>;
};

/** Asset system model */
export type AssetThumbnailProjectArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
    transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
    __typename?: 'AssetConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AssetEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AssetCreateInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    fileName: Scalars['String'];
    handle: Scalars['String'];
    height?: Maybe<Scalars['Float']>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: Maybe<AssetCreateLocalizationsInput>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    thumbnailBlog?: Maybe<BlogCreateManyInlineInput>;
    thumbnailProject?: Maybe<ProjectCreateManyInlineInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    fileName: Scalars['String'];
    handle: Scalars['String'];
    height?: Maybe<Scalars['Float']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
    /** Localization input */
    data: AssetCreateLocalizationDataInput;
    locale: Locale;
};

export type AssetCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Create and connect multiple existing Asset documents */
    create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
    /** Connect one existing Asset document */
    connect?: Maybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
    __typename?: 'AssetEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    thumbnailBlog_every?: Maybe<BlogWhereInput>;
    thumbnailBlog_none?: Maybe<BlogWhereInput>;
    thumbnailBlog_some?: Maybe<BlogWhereInput>;
    thumbnailProject_every?: Maybe<ProjectWhereInput>;
    thumbnailProject_none?: Maybe<ProjectWhereInput>;
    thumbnailProject_some?: Maybe<ProjectWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
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
    WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
    document?: Maybe<DocumentTransformationInput>;
    image?: Maybe<ImageTransformationInput>;
    /** Pass true if you want to validate the passed transformation parameters */
    validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
    fileName?: Maybe<Scalars['String']>;
    handle?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    /** Manage document localizations */
    localizations?: Maybe<AssetUpdateLocalizationsInput>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    thumbnailBlog?: Maybe<BlogUpdateManyInlineInput>;
    thumbnailProject?: Maybe<ProjectUpdateManyInlineInput>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
    fileName?: Maybe<Scalars['String']>;
    handle?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
    data: AssetUpdateLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: Maybe<Array<AssetCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: Maybe<Array<Locale>>;
    /** Localizations to update */
    update?: Maybe<Array<AssetUpdateLocalizationInput>>;
    upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: Maybe<Array<AssetConnectInput>>;
    /** Create and connect multiple Asset documents */
    create?: Maybe<Array<AssetCreateInput>>;
    /** Delete multiple Asset documents */
    delete?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Disconnect multiple Asset documents */
    disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Asset documents */
    set?: Maybe<Array<AssetWhereUniqueInput>>;
    /** Update multiple Asset documents */
    update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Asset documents */
    upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
    fileName?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    /** Optional updates to localizations */
    localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
    fileName?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    mimeType?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
    data: AssetUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AssetUpdateManyInput;
    /** Document search */
    where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
    /** Connect existing Asset document */
    connect?: Maybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: Maybe<AssetCreateInput>;
    /** Delete currently connected Asset document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Asset document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Asset document */
    update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Asset document */
    upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AssetUpdateInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
    /** Create document if it didn't exist */
    create: AssetCreateInput;
    /** Update document if it exists */
    update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
    create: AssetCreateLocalizationDataInput;
    locale: Locale;
    update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AssetUpsertInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    fileName?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    fileName_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    fileName_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    fileName_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    fileName_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    fileName_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    fileName_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    fileName_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    fileName_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    fileName_starts_with?: Maybe<Scalars['String']>;
    handle?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    handle_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    handle_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    handle_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    handle_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    handle_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    handle_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    handle_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    handle_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    handle_starts_with?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    /** All values greater than the given value. */
    height_gt?: Maybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    height_gte?: Maybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    height_in?: Maybe<Array<Scalars['Float']>>;
    /** All values less than the given value. */
    height_lt?: Maybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    height_lte?: Maybe<Scalars['Float']>;
    /** All values that are not equal to given value. */
    height_not?: Maybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    height_not_in?: Maybe<Array<Scalars['Float']>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    mimeType?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    mimeType_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    mimeType_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    mimeType_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    mimeType_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    mimeType_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    mimeType_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    mimeType_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    mimeType_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    mimeType_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    size?: Maybe<Scalars['Float']>;
    /** All values greater than the given value. */
    size_gt?: Maybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    size_gte?: Maybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    size_in?: Maybe<Array<Scalars['Float']>>;
    /** All values less than the given value. */
    size_lt?: Maybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    size_lte?: Maybe<Scalars['Float']>;
    /** All values that are not equal to given value. */
    size_not?: Maybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    size_not_in?: Maybe<Array<Scalars['Float']>>;
    thumbnailBlog_every?: Maybe<BlogWhereInput>;
    thumbnailBlog_none?: Maybe<BlogWhereInput>;
    thumbnailBlog_some?: Maybe<BlogWhereInput>;
    thumbnailProject_every?: Maybe<ProjectWhereInput>;
    thumbnailProject_none?: Maybe<ProjectWhereInput>;
    thumbnailProject_some?: Maybe<ProjectWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    width?: Maybe<Scalars['Float']>;
    /** All values greater than the given value. */
    width_gt?: Maybe<Scalars['Float']>;
    /** All values greater than or equal the given value. */
    width_gte?: Maybe<Scalars['Float']>;
    /** All values that are contained in given list. */
    width_in?: Maybe<Array<Scalars['Float']>>;
    /** All values less than the given value. */
    width_lt?: Maybe<Scalars['Float']>;
    /** All values less than or equal the given value. */
    width_lte?: Maybe<Scalars['Float']>;
    /** All values that are not equal to given value. */
    width_not?: Maybe<Scalars['Float']>;
    /** All values that are not contained in given list. */
    width_not_in?: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
    __typename?: 'BatchPayload';
    /** The number of nodes that have been affected by the Batch operation. */
    count: Scalars['Long'];
};

export type Blog = Node & {
    __typename?: 'Blog';
    content: RichText;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Blog>;
    featured: Scalars['Boolean'];
    /** List of Blog versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    introduction: Scalars['String'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    readTime: Scalars['String'];
    scheduledIn: Array<ScheduledOperation>;
    slug: Scalars['String'];
    /** System stage field */
    stage: Stage;
    tags: Array<Tag>;
    thumbnail: Asset;
    title: Scalars['String'];
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type BlogCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type BlogDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type BlogHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

export type BlogPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type BlogScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

export type BlogTagsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<TagOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<TagWhereInput>;
};

export type BlogThumbnailArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type BlogUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type BlogConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: BlogWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogConnection = {
    __typename?: 'BlogConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<BlogEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type BlogCreateInput = {
    content: Scalars['RichTextAST'];
    createdAt?: Maybe<Scalars['DateTime']>;
    featured: Scalars['Boolean'];
    introduction: Scalars['String'];
    readTime: Scalars['String'];
    slug: Scalars['String'];
    tags?: Maybe<TagCreateManyInlineInput>;
    thumbnail: AssetCreateOneInlineInput;
    title: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogCreateManyInlineInput = {
    /** Connect multiple existing Blog documents */
    connect?: Maybe<Array<BlogWhereUniqueInput>>;
    /** Create and connect multiple existing Blog documents */
    create?: Maybe<Array<BlogCreateInput>>;
};

export type BlogCreateOneInlineInput = {
    /** Connect one existing Blog document */
    connect?: Maybe<BlogWhereUniqueInput>;
    /** Create and connect one Blog document */
    create?: Maybe<BlogCreateInput>;
};

/** An edge in a connection. */
export type BlogEdge = {
    __typename?: 'BlogEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Blog;
};

/** Identifies documents */
export type BlogManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<BlogWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<BlogWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<BlogWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    featured: Scalars['Boolean'];
    /** All values that are not equal to given value. */
    featured_not: Scalars['Boolean'];
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    introduction?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    introduction_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    introduction_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    introduction_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    introduction_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    introduction_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    introduction_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    introduction_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    introduction_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    introduction_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    readTime?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    readTime_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    readTime_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    readTime_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    readTime_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    readTime_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    readTime_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    readTime_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    readTime_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    readTime_starts_with?: Maybe<Scalars['String']>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    slug?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    slug_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    slug_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    slug_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    slug_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    slug_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    slug_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    slug_starts_with?: Maybe<Scalars['String']>;
    tags_every?: Maybe<TagWhereInput>;
    tags_none?: Maybe<TagWhereInput>;
    tags_some?: Maybe<TagWhereInput>;
    thumbnail?: Maybe<AssetWhereInput>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum BlogOrderByInput {
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
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type BlogUpdateInput = {
    content?: Maybe<Scalars['RichTextAST']>;
    featured: Scalars['Boolean'];
    introduction?: Maybe<Scalars['String']>;
    readTime?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    tags?: Maybe<TagUpdateManyInlineInput>;
    thumbnail?: Maybe<AssetUpdateOneInlineInput>;
    title?: Maybe<Scalars['String']>;
};

export type BlogUpdateManyInlineInput = {
    /** Connect multiple existing Blog documents */
    connect?: Maybe<Array<BlogConnectInput>>;
    /** Create and connect multiple Blog documents */
    create?: Maybe<Array<BlogCreateInput>>;
    /** Delete multiple Blog documents */
    delete?: Maybe<Array<BlogWhereUniqueInput>>;
    /** Disconnect multiple Blog documents */
    disconnect?: Maybe<Array<BlogWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Blog documents */
    set?: Maybe<Array<BlogWhereUniqueInput>>;
    /** Update multiple Blog documents */
    update?: Maybe<Array<BlogUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Blog documents */
    upsert?: Maybe<Array<BlogUpsertWithNestedWhereUniqueInput>>;
};

export type BlogUpdateManyInput = {
    content?: Maybe<Scalars['RichTextAST']>;
    featured: Scalars['Boolean'];
    introduction?: Maybe<Scalars['String']>;
    readTime?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type BlogUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: BlogUpdateManyInput;
    /** Document search */
    where: BlogWhereInput;
};

export type BlogUpdateOneInlineInput = {
    /** Connect existing Blog document */
    connect?: Maybe<BlogWhereUniqueInput>;
    /** Create and connect one Blog document */
    create?: Maybe<BlogCreateInput>;
    /** Delete currently connected Blog document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Blog document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Blog document */
    update?: Maybe<BlogUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Blog document */
    upsert?: Maybe<BlogUpsertWithNestedWhereUniqueInput>;
};

export type BlogUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: BlogUpdateInput;
    /** Unique document search */
    where: BlogWhereUniqueInput;
};

export type BlogUpsertInput = {
    /** Create document if it didn't exist */
    create: BlogCreateInput;
    /** Update document if it exists */
    update: BlogUpdateInput;
};

export type BlogUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: BlogUpsertInput;
    /** Unique document search */
    where: BlogWhereUniqueInput;
};

/** Identifies documents */
export type BlogWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<BlogWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<BlogWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<BlogWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    featured: Scalars['Boolean'];
    /** All values that are not equal to given value. */
    featured_not: Scalars['Boolean'];
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    introduction?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    introduction_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    introduction_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    introduction_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    introduction_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    introduction_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    introduction_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    introduction_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    introduction_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    introduction_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    readTime?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    readTime_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    readTime_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    readTime_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    readTime_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    readTime_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    readTime_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    readTime_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    readTime_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    readTime_starts_with?: Maybe<Scalars['String']>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    slug?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    slug_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    slug_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    slug_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    slug_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    slug_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    slug_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    slug_starts_with?: Maybe<Scalars['String']>;
    tags_every?: Maybe<TagWhereInput>;
    tags_none?: Maybe<TagWhereInput>;
    tags_some?: Maybe<TagWhereInput>;
    thumbnail?: Maybe<AssetWhereInput>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References Blog record uniquely */
export type BlogWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
    __typename?: 'Color';
    css: Scalars['String'];
    hex: Scalars['Hex'];
    rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
    hex?: Maybe<Scalars['Hex']>;
    rgba?: Maybe<RgbaInput>;
};

export enum ColorScheme {
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
    Yellow = 'yellow',
}

export type ConnectPositionInput = {
    /** Connect document after specified document */
    after?: Maybe<Scalars['ID']>;
    /** Connect document before specified document */
    before?: Maybe<Scalars['ID']>;
    /** Connect document at last position */
    end?: Maybe<Scalars['Boolean']>;
    /** Connect document at first position */
    start?: Maybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
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
    Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
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
    format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
    /** Changes the output for the file. */
    output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
    __typename?: 'DocumentVersion';
    createdAt: Scalars['DateTime'];
    data?: Maybe<Scalars['Json']>;
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export enum ImageFit {
    /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
    Clip = 'clip',
    /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
    Crop = 'crop',
    /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
    Max = 'max',
    /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
    Scale = 'scale',
}

export type ImageResizeInput = {
    /** The default value for the fit parameter is fit:clip. */
    fit?: Maybe<ImageFit>;
    /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    height?: Maybe<Scalars['Int']>;
    /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
    /** Resizes the image */
    resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
    /** System locale */
    En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
    __typename?: 'Location';
    distance: Scalars['Float'];
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
    from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
    latitude: Scalars['Float'];
    longitude: Scalars['Float'];
};

export type Mutation = {
    __typename?: 'Mutation';
    /**
     * Create one asset
     * @deprecated Asset mutations will be overhauled soon
     */
    createAsset?: Maybe<Asset>;
    /** Create one blog */
    createBlog?: Maybe<Blog>;
    /** Create one project */
    createProject?: Maybe<Project>;
    /** Create one scheduledRelease */
    createScheduledRelease?: Maybe<ScheduledRelease>;
    /** Create one tag */
    createTag?: Maybe<Tag>;
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset?: Maybe<Asset>;
    /** Delete one blog from _all_ existing stages. Returns deleted document. */
    deleteBlog?: Maybe<Blog>;
    /**
     * Delete many Asset documents
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     */
    deleteManyAssets: BatchPayload;
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection: AssetConnection;
    /**
     * Delete many Blog documents
     * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
     */
    deleteManyBlogs: BatchPayload;
    /** Delete many Blog documents, return deleted documents */
    deleteManyBlogsConnection: BlogConnection;
    /**
     * Delete many Project documents
     * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
     */
    deleteManyProjects: BatchPayload;
    /** Delete many Project documents, return deleted documents */
    deleteManyProjectsConnection: ProjectConnection;
    /**
     * Delete many Tag documents
     * @deprecated Please use the new paginated many mutation (deleteManyTagsConnection)
     */
    deleteManyTags: BatchPayload;
    /** Delete many Tag documents, return deleted documents */
    deleteManyTagsConnection: TagConnection;
    /** Delete one project from _all_ existing stages. Returns deleted document. */
    deleteProject?: Maybe<Project>;
    /** Delete and return scheduled operation */
    deleteScheduledOperation?: Maybe<ScheduledOperation>;
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease?: Maybe<ScheduledRelease>;
    /** Delete one tag from _all_ existing stages. Returns deleted document. */
    deleteTag?: Maybe<Tag>;
    /** Publish one asset */
    publishAsset?: Maybe<Asset>;
    /** Publish one blog */
    publishBlog?: Maybe<Blog>;
    /**
     * Publish many Asset documents
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     */
    publishManyAssets: BatchPayload;
    /** Publish many Asset documents */
    publishManyAssetsConnection: AssetConnection;
    /**
     * Publish many Blog documents
     * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
     */
    publishManyBlogs: BatchPayload;
    /** Publish many Blog documents */
    publishManyBlogsConnection: BlogConnection;
    /**
     * Publish many Project documents
     * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
     */
    publishManyProjects: BatchPayload;
    /** Publish many Project documents */
    publishManyProjectsConnection: ProjectConnection;
    /**
     * Publish many Tag documents
     * @deprecated Please use the new paginated many mutation (publishManyTagsConnection)
     */
    publishManyTags: BatchPayload;
    /** Publish many Tag documents */
    publishManyTagsConnection: TagConnection;
    /** Publish one project */
    publishProject?: Maybe<Project>;
    /** Publish one tag */
    publishTag?: Maybe<Tag>;
    /** Schedule to publish one asset */
    schedulePublishAsset?: Maybe<Asset>;
    /** Schedule to publish one blog */
    schedulePublishBlog?: Maybe<Blog>;
    /** Schedule to publish one project */
    schedulePublishProject?: Maybe<Project>;
    /** Schedule to publish one tag */
    schedulePublishTag?: Maybe<Tag>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset?: Maybe<Asset>;
    /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishBlog?: Maybe<Blog>;
    /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProject?: Maybe<Project>;
    /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishTag?: Maybe<Tag>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset?: Maybe<Asset>;
    /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishBlog?: Maybe<Blog>;
    /**
     * Unpublish many Asset documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     */
    unpublishManyAssets: BatchPayload;
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection: AssetConnection;
    /**
     * Unpublish many Blog documents
     * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
     */
    unpublishManyBlogs: BatchPayload;
    /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyBlogsConnection: BlogConnection;
    /**
     * Unpublish many Project documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
     */
    unpublishManyProjects: BatchPayload;
    /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProjectsConnection: ProjectConnection;
    /**
     * Unpublish many Tag documents
     * @deprecated Please use the new paginated many mutation (unpublishManyTagsConnection)
     */
    unpublishManyTags: BatchPayload;
    /** Find many Tag documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyTagsConnection: TagConnection;
    /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProject?: Maybe<Project>;
    /** Unpublish one tag from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishTag?: Maybe<Tag>;
    /** Update one asset */
    updateAsset?: Maybe<Asset>;
    /** Update one blog */
    updateBlog?: Maybe<Blog>;
    /**
     * Update many assets
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     */
    updateManyAssets: BatchPayload;
    /** Update many Asset documents */
    updateManyAssetsConnection: AssetConnection;
    /**
     * Update many blogs
     * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
     */
    updateManyBlogs: BatchPayload;
    /** Update many Blog documents */
    updateManyBlogsConnection: BlogConnection;
    /**
     * Update many projects
     * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
     */
    updateManyProjects: BatchPayload;
    /** Update many Project documents */
    updateManyProjectsConnection: ProjectConnection;
    /**
     * Update many tags
     * @deprecated Please use the new paginated many mutation (updateManyTagsConnection)
     */
    updateManyTags: BatchPayload;
    /** Update many Tag documents */
    updateManyTagsConnection: TagConnection;
    /** Update one project */
    updateProject?: Maybe<Project>;
    /** Update one scheduledRelease */
    updateScheduledRelease?: Maybe<ScheduledRelease>;
    /** Update one tag */
    updateTag?: Maybe<Tag>;
    /** Upsert one asset */
    upsertAsset?: Maybe<Asset>;
    /** Upsert one blog */
    upsertBlog?: Maybe<Blog>;
    /** Upsert one project */
    upsertProject?: Maybe<Project>;
    /** Upsert one tag */
    upsertTag?: Maybe<Tag>;
};

export type MutationCreateAssetArgs = {
    data: AssetCreateInput;
};

export type MutationCreateBlogArgs = {
    data: BlogCreateInput;
};

export type MutationCreateProjectArgs = {
    data: ProjectCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
    data: ScheduledReleaseCreateInput;
};

export type MutationCreateTagArgs = {
    data: TagCreateInput;
};

export type MutationDeleteAssetArgs = {
    where: AssetWhereUniqueInput;
};

export type MutationDeleteBlogArgs = {
    where: BlogWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationDeleteManyBlogsArgs = {
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationDeleteManyBlogsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationDeleteManyProjectsArgs = {
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationDeleteManyTagsArgs = {
    where?: Maybe<TagManyWhereInput>;
};

export type MutationDeleteManyTagsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationDeleteProjectArgs = {
    where: ProjectWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
    where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteTagArgs = {
    where: TagWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationPublishBlogArgs = {
    to?: Array<Stage>;
    where: BlogWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    to?: Array<Stage>;
    where?: Maybe<AssetManyWhereInput>;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<AssetManyWhereInput>;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationPublishManyBlogsArgs = {
    to?: Array<Stage>;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationPublishManyBlogsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationPublishManyProjectsArgs = {
    to?: Array<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationPublishManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationPublishManyTagsArgs = {
    to?: Array<Stage>;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationPublishManyTagsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Maybe<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    to?: Array<Stage>;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationPublishProjectArgs = {
    to?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationPublishTagArgs = {
    to?: Array<Stage>;
    where: TagWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
    locales?: Maybe<Array<Locale>>;
    publishBase?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: Maybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishBlogArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: BlogWhereUniqueInput;
};

export type MutationSchedulePublishProjectArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationSchedulePublishTagArgs = {
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    to?: Array<Stage>;
    where: TagWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: Maybe<Array<Locale>>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishBlogArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: BlogWhereUniqueInput;
};

export type MutationScheduleUnpublishProjectArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: ProjectWhereUniqueInput;
};

export type MutationScheduleUnpublishTagArgs = {
    from?: Array<Stage>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    releaseId?: Maybe<Scalars['String']>;
    where: TagWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: Maybe<Array<Locale>>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where: AssetWhereUniqueInput;
};

export type MutationUnpublishBlogArgs = {
    from?: Array<Stage>;
    where: BlogWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
    from?: Array<Stage>;
    locales?: Maybe<Array<Locale>>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    unpublishBase?: Maybe<Scalars['Boolean']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyBlogsArgs = {
    from?: Array<Stage>;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationUnpublishManyBlogsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationUnpublishManyProjectsArgs = {
    from?: Array<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUnpublishManyTagsArgs = {
    from?: Array<Stage>;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationUnpublishManyTagsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    first?: Maybe<Scalars['Int']>;
    from?: Array<Stage>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Maybe<Stage>;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationUnpublishProjectArgs = {
    from?: Array<Stage>;
    where: ProjectWhereUniqueInput;
};

export type MutationUnpublishTagArgs = {
    from?: Array<Stage>;
    where: TagWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
    data: AssetUpdateInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpdateBlogArgs = {
    data: BlogUpdateInput;
    where: BlogWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
    data: AssetUpdateManyInput;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: AssetUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<AssetManyWhereInput>;
};

export type MutationUpdateManyBlogsArgs = {
    data: BlogUpdateManyInput;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationUpdateManyBlogsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: BlogUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<BlogManyWhereInput>;
};

export type MutationUpdateManyProjectsArgs = {
    data: ProjectUpdateManyInput;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyProjectsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: ProjectUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectManyWhereInput>;
};

export type MutationUpdateManyTagsArgs = {
    data: TagUpdateManyInput;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationUpdateManyTagsConnectionArgs = {
    after?: Maybe<Scalars['ID']>;
    before?: Maybe<Scalars['ID']>;
    data: TagUpdateManyInput;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<TagManyWhereInput>;
};

export type MutationUpdateProjectArgs = {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
    data: ScheduledReleaseUpdateInput;
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateTagArgs = {
    data: TagUpdateInput;
    where: TagWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
    upsert: AssetUpsertInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpsertBlogArgs = {
    upsert: BlogUpsertInput;
    where: BlogWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
    upsert: ProjectUpsertInput;
    where: ProjectWhereUniqueInput;
};

export type MutationUpsertTagArgs = {
    upsert: TagUpsertInput;
    where: TagWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
    /** The id of the object. */
    id: Scalars['ID'];
    /** The Stage of an object */
    stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** Number of items in the current page. */
    pageSize?: Maybe<Scalars['Int']>;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
};

export type Project = Node & {
    __typename?: 'Project';
    content: RichText;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Project>;
    featured: Scalars['Boolean'];
    /** List of Project versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    introduction: Scalars['String'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    readTime: Scalars['String'];
    scheduledIn: Array<ScheduledOperation>;
    slug: Scalars['String'];
    /** System stage field */
    stage: Stage;
    tags: Array<Tag>;
    thumbnail: Asset;
    title: Scalars['String'];
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type ProjectCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ProjectDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type ProjectHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

export type ProjectPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ProjectScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

export type ProjectTagsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<TagOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<TagWhereInput>;
};

export type ProjectThumbnailArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ProjectUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ProjectConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProjectWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectConnection = {
    __typename?: 'ProjectConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProjectEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ProjectCreateInput = {
    content: Scalars['RichTextAST'];
    createdAt?: Maybe<Scalars['DateTime']>;
    featured: Scalars['Boolean'];
    introduction: Scalars['String'];
    readTime: Scalars['String'];
    slug: Scalars['String'];
    tags?: Maybe<TagCreateManyInlineInput>;
    thumbnail: AssetCreateOneInlineInput;
    title: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyInlineInput = {
    /** Connect multiple existing Project documents */
    connect?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Create and connect multiple existing Project documents */
    create?: Maybe<Array<ProjectCreateInput>>;
};

export type ProjectCreateOneInlineInput = {
    /** Connect one existing Project document */
    connect?: Maybe<ProjectWhereUniqueInput>;
    /** Create and connect one Project document */
    create?: Maybe<ProjectCreateInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
    __typename?: 'ProjectEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Project;
};

/** Identifies documents */
export type ProjectManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ProjectWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ProjectWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ProjectWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    featured: Scalars['Boolean'];
    /** All values that are not equal to given value. */
    featured_not: Scalars['Boolean'];
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    introduction?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    introduction_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    introduction_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    introduction_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    introduction_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    introduction_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    introduction_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    introduction_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    introduction_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    introduction_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    readTime?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    readTime_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    readTime_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    readTime_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    readTime_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    readTime_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    readTime_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    readTime_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    readTime_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    readTime_starts_with?: Maybe<Scalars['String']>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    slug?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    slug_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    slug_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    slug_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    slug_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    slug_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    slug_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    slug_starts_with?: Maybe<Scalars['String']>;
    tags_every?: Maybe<TagWhereInput>;
    tags_none?: Maybe<TagWhereInput>;
    tags_some?: Maybe<TagWhereInput>;
    thumbnail?: Maybe<AssetWhereInput>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum ProjectOrderByInput {
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
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProjectUpdateInput = {
    content?: Maybe<Scalars['RichTextAST']>;
    featured: Scalars['Boolean'];
    introduction?: Maybe<Scalars['String']>;
    readTime?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    tags?: Maybe<TagUpdateManyInlineInput>;
    thumbnail?: Maybe<AssetUpdateOneInlineInput>;
    title?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyInlineInput = {
    /** Connect multiple existing Project documents */
    connect?: Maybe<Array<ProjectConnectInput>>;
    /** Create and connect multiple Project documents */
    create?: Maybe<Array<ProjectCreateInput>>;
    /** Delete multiple Project documents */
    delete?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Disconnect multiple Project documents */
    disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Project documents */
    set?: Maybe<Array<ProjectWhereUniqueInput>>;
    /** Update multiple Project documents */
    update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Project documents */
    upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
    content?: Maybe<Scalars['RichTextAST']>;
    featured: Scalars['Boolean'];
    introduction?: Maybe<Scalars['String']>;
    readTime?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProjectUpdateManyInput;
    /** Document search */
    where: ProjectWhereInput;
};

export type ProjectUpdateOneInlineInput = {
    /** Connect existing Project document */
    connect?: Maybe<ProjectWhereUniqueInput>;
    /** Create and connect one Project document */
    create?: Maybe<ProjectCreateInput>;
    /** Delete currently connected Project document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Project document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Project document */
    update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Project document */
    upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProjectUpdateInput;
    /** Unique document search */
    where: ProjectWhereUniqueInput;
};

export type ProjectUpsertInput = {
    /** Create document if it didn't exist */
    create: ProjectCreateInput;
    /** Update document if it exists */
    update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProjectUpsertInput;
    /** Unique document search */
    where: ProjectWhereUniqueInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ProjectWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ProjectWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ProjectWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    featured: Scalars['Boolean'];
    /** All values that are not equal to given value. */
    featured_not: Scalars['Boolean'];
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    introduction?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    introduction_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    introduction_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    introduction_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    introduction_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    introduction_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    introduction_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    introduction_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    introduction_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    introduction_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    readTime?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    readTime_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    readTime_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    readTime_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    readTime_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    readTime_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    readTime_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    readTime_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    readTime_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    readTime_starts_with?: Maybe<Scalars['String']>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    slug?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    slug_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    slug_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    slug_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    slug_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    slug_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    slug_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    slug_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    slug_starts_with?: Maybe<Scalars['String']>;
    tags_every?: Maybe<TagWhereInput>;
    tags_none?: Maybe<TagWhereInput>;
    tags_some?: Maybe<TagWhereInput>;
    thumbnail?: Maybe<AssetWhereInput>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
    /** Locales to publish */
    locale: Locale;
    /** Stages to publish selected locales to */
    stages: Array<Stage>;
};

export type Query = {
    __typename?: 'Query';
    /** Retrieve a single asset */
    asset?: Maybe<Asset>;
    /** Retrieve document version */
    assetVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple assets */
    assets: Array<Asset>;
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection: AssetConnection;
    /** Retrieve a single blog */
    blog?: Maybe<Blog>;
    /** Retrieve document version */
    blogVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple blogs */
    blogs: Array<Blog>;
    /** Retrieve multiple blogs using the Relay connection interface */
    blogsConnection: BlogConnection;
    /** Fetches an object given its ID */
    node?: Maybe<Node>;
    /** Retrieve a single project */
    project?: Maybe<Project>;
    /** Retrieve document version */
    projectVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple projects */
    projects: Array<Project>;
    /** Retrieve multiple projects using the Relay connection interface */
    projectsConnection: ProjectConnection;
    /** Retrieve a single scheduledOperation */
    scheduledOperation?: Maybe<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations */
    scheduledOperations: Array<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection: ScheduledOperationConnection;
    /** Retrieve a single scheduledRelease */
    scheduledRelease?: Maybe<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases */
    scheduledReleases: Array<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection: ScheduledReleaseConnection;
    /** Retrieve a single tag */
    tag?: Maybe<Tag>;
    /** Retrieve document version */
    tagVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple tags */
    tags: Array<Tag>;
    /** Retrieve multiple tags using the Relay connection interface */
    tagsConnection: TagConnection;
    /** Retrieve a single user */
    user?: Maybe<User>;
    /** Retrieve multiple users */
    users: Array<User>;
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection: UserConnection;
};

export type QueryAssetArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAssetsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<AssetOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<AssetOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<AssetWhereInput>;
};

export type QueryBlogArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: BlogWhereUniqueInput;
};

export type QueryBlogVersionArgs = {
    where: VersionWhereInput;
};

export type QueryBlogsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<BlogOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<BlogWhereInput>;
};

export type QueryBlogsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<BlogOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<BlogWhereInput>;
};

export type QueryNodeArgs = {
    id: Scalars['ID'];
    locales?: Array<Locale>;
    stage?: Stage;
};

export type QueryProjectArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProjectWhereUniqueInput;
};

export type QueryProjectVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProjectsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ProjectWhereInput>;
};

export type QueryProjectsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ProjectWhereInput>;
};

export type QueryScheduledOperationArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledReleaseOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<ScheduledReleaseOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<ScheduledReleaseWhereInput>;
};

export type QueryTagArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: TagWhereUniqueInput;
};

export type QueryTagVersionArgs = {
    where: VersionWhereInput;
};

export type QueryTagsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<TagOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<TagWhereInput>;
};

export type QueryTagsConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<TagOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<TagWhereInput>;
};

export type QueryUserArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<UserOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Array<Locale>;
    orderBy?: Maybe<UserOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    stage?: Stage;
    where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
    __typename?: 'RGBA';
    a: Scalars['RGBATransparency'];
    b: Scalars['RGBAHue'];
    g: Scalars['RGBAHue'];
    r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
    a: Scalars['RGBATransparency'];
    b: Scalars['RGBAHue'];
    g: Scalars['RGBAHue'];
    r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
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
export type ScheduledOperation = Node & {
    __typename?: 'ScheduledOperation';
    affectedDocuments: Array<ScheduledOperationAffectedDocument>;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Operation description */
    description?: Maybe<Scalars['String']>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>;
    /** Operation error message */
    errorMessage?: Maybe<Scalars['String']>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json'];
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>;
    /** System stage field */
    stage: Stage;
    /** operation Status */
    status: ScheduledOperationStatus;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Blog | Project | Tag;

export type ScheduledOperationConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
    __typename?: 'ScheduledOperationConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledOperationEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
    /** Connect one existing ScheduledOperation document */
    connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
    __typename?: 'ScheduledOperationEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    release?: Maybe<ScheduledReleaseWhereInput>;
    status?: Maybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledOperationStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
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
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
    Canceled = 'CANCELED',
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: Maybe<Array<ScheduledOperationConnectInput>>;
    /** Disconnect multiple ScheduledOperation documents */
    disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledOperation documents */
    set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
    /** Connect existing ScheduledOperation document */
    connect?: Maybe<ScheduledOperationWhereUniqueInput>;
    /** Disconnect currently connected ScheduledOperation document */
    disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    release?: Maybe<ScheduledReleaseWhereInput>;
    status?: Maybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledOperationStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
    __typename?: 'ScheduledRelease';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Release description */
    description?: Maybe<Scalars['String']>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>;
    /** Release error message */
    errorMessage?: Maybe<Scalars['String']>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean'];
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean'];
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Release date and time */
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** System stage field */
    stage: Stage;
    /** Release Status */
    status: ScheduledReleaseStatus;
    /** Release Title */
    title?: Maybe<Scalars['String']>;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ScheduledOperationOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
    __typename?: 'ScheduledReleaseConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledReleaseEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
    createdAt?: Maybe<Scalars['DateTime']>;
    description?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    isActive?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Create and connect multiple existing ScheduledRelease documents */
    create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
    /** Connect one existing ScheduledRelease document */
    connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
    __typename?: 'ScheduledReleaseEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    isImplicit?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isImplicit_not?: Maybe<Scalars['Boolean']>;
    operations_every?: Maybe<ScheduledOperationWhereInput>;
    operations_none?: Maybe<ScheduledOperationWhereInput>;
    operations_some?: Maybe<ScheduledOperationWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    releaseAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    releaseAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    releaseAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    status?: Maybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledReleaseStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
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
    UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
    Completed = 'COMPLETED',
    Failed = 'FAILED',
    InProgress = 'IN_PROGRESS',
    Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
    description?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    isActive?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
    /** Create and connect multiple ScheduledRelease documents */
    create?: Maybe<Array<ScheduledReleaseCreateInput>>;
    /** Delete multiple ScheduledRelease documents */
    delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Disconnect multiple ScheduledRelease documents */
    disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledRelease documents */
    set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Update multiple ScheduledRelease documents */
    update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ScheduledRelease documents */
    upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
    description?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    isActive?: Maybe<Scalars['Boolean']>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ScheduledReleaseUpdateManyInput;
    /** Document search */
    where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
    /** Connect existing ScheduledRelease document */
    connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: Maybe<ScheduledReleaseCreateInput>;
    /** Delete currently connected ScheduledRelease document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected ScheduledRelease document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single ScheduledRelease document */
    update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ScheduledRelease document */
    upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ScheduledReleaseUpdateInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
    /** Create document if it didn't exist */
    create: ScheduledReleaseCreateInput;
    /** Update document if it exists */
    update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ScheduledReleaseUpsertInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    description?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    description_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    description_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    description_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    description_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    description_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    description_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    description_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    description_starts_with?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    errorMessage_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    errorMessage_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    isImplicit?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isImplicit_not?: Maybe<Scalars['Boolean']>;
    operations_every?: Maybe<ScheduledOperationWhereInput>;
    operations_none?: Maybe<ScheduledOperationWhereInput>;
    operations_some?: Maybe<ScheduledOperationWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    releaseAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    releaseAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    releaseAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    releaseAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    status?: Maybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: Maybe<Array<ScheduledReleaseStatus>>;
    /** All values that are not equal to given value. */
    status_not?: Maybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
    title?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    title_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    title_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    title_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    title_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    title_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    title_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    title_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    title_starts_with?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
    /** The Draft is the default stage for all your content. */
    Draft = 'DRAFT',
    /** The Published stage is where you can publish your content to. */
    Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
    Base = 'BASE',
    Combined = 'COMBINED',
    Localization = 'LOCALIZATION',
}

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type Tag = Node & {
    __typename?: 'Tag';
    blog: Array<Blog>;
    color: Scalars['String'];
    colorScheme: ColorScheme;
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Tag>;
    /** List of Tag versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars['ID'];
    project: Array<Project>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    value: Scalars['String'];
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagBlogArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<BlogOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<BlogWhereInput>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagCreatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagHistoryArgs = {
    limit?: Scalars['Int'];
    skip?: Scalars['Int'];
    stageOverride?: Maybe<Stage>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagProjectArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    orderBy?: Maybe<ProjectOrderByInput>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagPublishedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagScheduledInArgs = {
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    locales?: Maybe<Array<Locale>>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<ScheduledOperationWhereInput>;
};

/** A way of categorizing blog posts, projects and bytes learning series.  */
export type TagUpdatedByArgs = {
    locales?: Maybe<Array<Locale>>;
};

export type TagConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: TagWhereUniqueInput;
};

/** A connection to a list of items. */
export type TagConnection = {
    __typename?: 'TagConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<TagEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type TagCreateInput = {
    blog?: Maybe<BlogCreateManyInlineInput>;
    color: Scalars['String'];
    colorScheme: ColorScheme;
    createdAt?: Maybe<Scalars['DateTime']>;
    project?: Maybe<ProjectCreateManyInlineInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    value: Scalars['String'];
};

export type TagCreateManyInlineInput = {
    /** Connect multiple existing Tag documents */
    connect?: Maybe<Array<TagWhereUniqueInput>>;
    /** Create and connect multiple existing Tag documents */
    create?: Maybe<Array<TagCreateInput>>;
};

export type TagCreateOneInlineInput = {
    /** Connect one existing Tag document */
    connect?: Maybe<TagWhereUniqueInput>;
    /** Create and connect one Tag document */
    create?: Maybe<TagCreateInput>;
};

/** An edge in a connection. */
export type TagEdge = {
    __typename?: 'TagEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: Tag;
};

/** Identifies documents */
export type TagManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<TagWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<TagWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<TagWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    blog_every?: Maybe<BlogWhereInput>;
    blog_none?: Maybe<BlogWhereInput>;
    blog_some?: Maybe<BlogWhereInput>;
    color?: Maybe<Scalars['String']>;
    colorScheme: ColorScheme;
    /** All values that are contained in given list. */
    colorScheme_in: Array<ColorScheme>;
    /** All values that are not equal to given value. */
    colorScheme_not: ColorScheme;
    /** All values that are not contained in given list. */
    colorScheme_not_in: Array<ColorScheme>;
    /** All values containing the given string. */
    color_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    color_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    color_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    color_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    color_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    color_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    color_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    color_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    color_starts_with?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    project_every?: Maybe<ProjectWhereInput>;
    project_none?: Maybe<ProjectWhereInput>;
    project_some?: Maybe<ProjectWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    value?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    value_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    value_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    value_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    value_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    value_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    value_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    value_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    value_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    value_starts_with?: Maybe<Scalars['String']>;
};

export enum TagOrderByInput {
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
    ValueDesc = 'value_DESC',
}

export type TagUpdateInput = {
    blog?: Maybe<BlogUpdateManyInlineInput>;
    color?: Maybe<Scalars['String']>;
    colorScheme: ColorScheme;
    project?: Maybe<ProjectUpdateManyInlineInput>;
    value?: Maybe<Scalars['String']>;
};

export type TagUpdateManyInlineInput = {
    /** Connect multiple existing Tag documents */
    connect?: Maybe<Array<TagConnectInput>>;
    /** Create and connect multiple Tag documents */
    create?: Maybe<Array<TagCreateInput>>;
    /** Delete multiple Tag documents */
    delete?: Maybe<Array<TagWhereUniqueInput>>;
    /** Disconnect multiple Tag documents */
    disconnect?: Maybe<Array<TagWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Tag documents */
    set?: Maybe<Array<TagWhereUniqueInput>>;
    /** Update multiple Tag documents */
    update?: Maybe<Array<TagUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Tag documents */
    upsert?: Maybe<Array<TagUpsertWithNestedWhereUniqueInput>>;
};

export type TagUpdateManyInput = {
    color?: Maybe<Scalars['String']>;
    colorScheme: ColorScheme;
    value?: Maybe<Scalars['String']>;
};

export type TagUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: TagUpdateManyInput;
    /** Document search */
    where: TagWhereInput;
};

export type TagUpdateOneInlineInput = {
    /** Connect existing Tag document */
    connect?: Maybe<TagWhereUniqueInput>;
    /** Create and connect one Tag document */
    create?: Maybe<TagCreateInput>;
    /** Delete currently connected Tag document */
    delete?: Maybe<Scalars['Boolean']>;
    /** Disconnect currently connected Tag document */
    disconnect?: Maybe<Scalars['Boolean']>;
    /** Update single Tag document */
    update?: Maybe<TagUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Tag document */
    upsert?: Maybe<TagUpsertWithNestedWhereUniqueInput>;
};

export type TagUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: TagUpdateInput;
    /** Unique document search */
    where: TagWhereUniqueInput;
};

export type TagUpsertInput = {
    /** Create document if it didn't exist */
    create: TagCreateInput;
    /** Update document if it exists */
    update: TagUpdateInput;
};

export type TagUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: TagUpsertInput;
    /** Unique document search */
    where: TagWhereUniqueInput;
};

/** Identifies documents */
export type TagWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<TagWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<TagWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<TagWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    blog_every?: Maybe<BlogWhereInput>;
    blog_none?: Maybe<BlogWhereInput>;
    blog_some?: Maybe<BlogWhereInput>;
    color?: Maybe<Scalars['String']>;
    colorScheme: ColorScheme;
    /** All values that are contained in given list. */
    colorScheme_in: Array<ColorScheme>;
    /** All values that are not equal to given value. */
    colorScheme_not: ColorScheme;
    /** All values that are not contained in given list. */
    colorScheme_not_in: Array<ColorScheme>;
    /** All values containing the given string. */
    color_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    color_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    color_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    color_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    color_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    color_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    color_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    color_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    color_starts_with?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    createdBy?: Maybe<UserWhereInput>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    project_every?: Maybe<ProjectWhereInput>;
    project_none?: Maybe<ProjectWhereInput>;
    project_some?: Maybe<ProjectWhereInput>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    publishedBy?: Maybe<UserWhereInput>;
    scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedBy?: Maybe<UserWhereInput>;
    value?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    value_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    value_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    value_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    value_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    value_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    value_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    value_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    value_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    value_starts_with?: Maybe<Scalars['String']>;
};

/** References Tag record uniquely */
export type TagWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
    /** Locales to unpublish */
    locale: Locale;
    /** Stages to unpublish selected locales from */
    stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
    __typename?: 'User';
    /** The time the document was created */
    createdAt: Scalars['DateTime'];
    /** Get the document in other stages */
    documentInStages: Array<User>;
    /** The unique identifier */
    id: Scalars['ID'];
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean'];
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind;
    /** The username */
    name: Scalars['String'];
    /** Profile Picture url */
    picture?: Maybe<Scalars['String']>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars['DateTime'];
};

/** User system model */
export type UserDocumentInStagesArgs = {
    includeCurrent?: Scalars['Boolean'];
    inheritLocale?: Scalars['Boolean'];
    stages?: Array<Stage>;
};

export type UserConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: Maybe<ConnectPositionInput>;
    /** Document to connect */
    where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
    __typename?: 'UserConnection';
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<UserEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
    /** Connect one existing User document */
    connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
    __typename?: 'UserEdge';
    /** A cursor for use in pagination. */
    cursor: Scalars['String'];
    /** The item at the end of the edge. */
    node: User;
};

/** System User Kind */
export enum UserKind {
    Member = 'MEMBER',
    Pat = 'PAT',
    Public = 'PUBLIC',
    Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    kind?: Maybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: Maybe<Array<UserKind>>;
    /** All values that are not equal to given value. */
    kind_not?: Maybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: Maybe<Array<UserKind>>;
    name?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    name_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    picture_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    picture_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    picture_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    picture_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    picture_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    picture_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    picture_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
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
    UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: Maybe<Array<UserConnectInput>>;
    /** Disconnect multiple User documents */
    disconnect?: Maybe<Array<UserWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing User documents */
    set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
    /** Connect existing User document */
    connect?: Maybe<UserWhereUniqueInput>;
    /** Disconnect currently connected User document */
    disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
    /** Logical AND on all given filters. */
    AND?: Maybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: Maybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: Maybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    createdAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    createdAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    createdAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    createdAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    id?: Maybe<Scalars['ID']>;
    /** All values containing the given string. */
    id_contains?: Maybe<Scalars['ID']>;
    /** All values ending with the given string. */
    id_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are contained in given list. */
    id_in?: Maybe<Array<Scalars['ID']>>;
    /** All values that are not equal to given value. */
    id_not?: Maybe<Scalars['ID']>;
    /** All values not containing the given string. */
    id_not_contains?: Maybe<Scalars['ID']>;
    /** All values not ending with the given string */
    id_not_ends_with?: Maybe<Scalars['ID']>;
    /** All values that are not contained in given list. */
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: Maybe<Scalars['ID']>;
    /** All values starting with the given string. */
    id_starts_with?: Maybe<Scalars['ID']>;
    isActive?: Maybe<Scalars['Boolean']>;
    /** All values that are not equal to given value. */
    isActive_not?: Maybe<Scalars['Boolean']>;
    kind?: Maybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: Maybe<Array<UserKind>>;
    /** All values that are not equal to given value. */
    kind_not?: Maybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: Maybe<Array<UserKind>>;
    name?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    name_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    name_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    name_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    name_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    name_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    name_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    name_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    name_starts_with?: Maybe<Scalars['String']>;
    picture?: Maybe<Scalars['String']>;
    /** All values containing the given string. */
    picture_contains?: Maybe<Scalars['String']>;
    /** All values ending with the given string. */
    picture_ends_with?: Maybe<Scalars['String']>;
    /** All values that are contained in given list. */
    picture_in?: Maybe<Array<Scalars['String']>>;
    /** All values that are not equal to given value. */
    picture_not?: Maybe<Scalars['String']>;
    /** All values not containing the given string. */
    picture_not_contains?: Maybe<Scalars['String']>;
    /** All values not ending with the given string */
    picture_not_ends_with?: Maybe<Scalars['String']>;
    /** All values that are not contained in given list. */
    picture_not_in?: Maybe<Array<Scalars['String']>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: Maybe<Scalars['String']>;
    /** All values starting with the given string. */
    picture_starts_with?: Maybe<Scalars['String']>;
    publishedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    publishedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    publishedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    publishedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    /** All values greater than the given value. */
    updatedAt_gt?: Maybe<Scalars['DateTime']>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: Maybe<Scalars['DateTime']>;
    /** All values that are contained in given list. */
    updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
    /** All values less than the given value. */
    updatedAt_lt?: Maybe<Scalars['DateTime']>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: Maybe<Scalars['DateTime']>;
    /** All values that are not equal to given value. */
    updatedAt_not?: Maybe<Scalars['DateTime']>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
    id?: Maybe<Scalars['ID']>;
};

export type Version = {
    __typename?: 'Version';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export type VersionWhereInput = {
    id: Scalars['ID'];
    revision: Scalars['Int'];
    stage: Stage;
};

export enum _FilterKind {
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
    StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
    Enum = 'enum',
    Relation = 'relation',
    RichText = 'richText',
    RichTextWithEmbeds = 'richTextWithEmbeds',
    Scalar = 'scalar',
    Union = 'union',
    Virtual = 'virtual',
}

export enum _MutationKind {
    Create = 'create',
    Delete = 'delete',
    DeleteMany = 'deleteMany',
    Publish = 'publish',
    PublishMany = 'publishMany',
    Unpublish = 'unpublish',
    UnpublishMany = 'unpublishMany',
    Update = 'update',
    UpdateMany = 'updateMany',
    Upsert = 'upsert',
}

export enum _OrderDirection {
    Asc = 'asc',
    Desc = 'desc',
}

export enum _RelationInputCardinality {
    Many = 'many',
    One = 'one',
}

export enum _RelationInputKind {
    Create = 'create',
    Update = 'update',
}

export enum _RelationKind {
    Regular = 'regular',
    Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
    Base = 'base',
    Combined = 'combined',
    Localization = 'localization',
}

export type GetAllBlogSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBlogSlugsQuery = {
    __typename?: 'Query';
    blogs: Array<{ __typename?: 'Blog'; slug: string }>;
};

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBlogsQuery = {
    __typename?: 'Query';
    blogs: Array<{
        __typename?: 'Blog';
        id: string;
        title: string;
        slug: string;
        featured: boolean;
        readTime: string;
        introduction: string;
        createdAt: any;
        content: { __typename?: 'RichText'; markdown: string };
        thumbnail: { __typename?: 'Asset'; id: string; url: string };
        tags: Array<{
            __typename?: 'Tag';
            id: string;
            value: string;
            colorScheme: ColorScheme;
        }>;
    }>;
};

export type GetAllProjectSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProjectSlugsQuery = {
    __typename?: 'Query';
    projects: Array<{ __typename?: 'Project'; slug: string }>;
};

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProjectsQuery = {
    __typename?: 'Query';
    projects: Array<{
        __typename?: 'Project';
        id: string;
        title: string;
        slug: string;
        featured: boolean;
        readTime: string;
        introduction: string;
        createdAt: any;
        content: { __typename?: 'RichText'; markdown: string };
        thumbnail: { __typename?: 'Asset'; id: string; url: string };
        tags: Array<{
            __typename?: 'Tag';
            id: string;
            value: string;
            colorScheme: ColorScheme;
        }>;
    }>;
};

export type GetFeaturedBlogsQueryVariables = Exact<{ [key: string]: never }>;

export type GetFeaturedBlogsQuery = {
    __typename?: 'Query';
    blogs: Array<{
        __typename?: 'Blog';
        id: string;
        title: string;
        slug: string;
        featured: boolean;
        introduction: string;
        createdAt: any;
        readTime: string;
        thumbnail: { __typename?: 'Asset'; id: string; url: string };
        tags: Array<{
            __typename?: 'Tag';
            id: string;
            value: string;
            colorScheme: ColorScheme;
        }>;
    }>;
};

export type GetFeaturedProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetFeaturedProjectsQuery = {
    __typename?: 'Query';
    projects: Array<{
        __typename?: 'Project';
        id: string;
        title: string;
        slug: string;
        featured: boolean;
        introduction: string;
        createdAt: any;
        readTime: string;
        thumbnail: { __typename?: 'Asset'; id: string; url: string };
        tags: Array<{
            __typename?: 'Tag';
            id: string;
            value: string;
            colorScheme: ColorScheme;
        }>;
    }>;
};

export type GetSingleBlogBySlugQueryVariables = Exact<{
    slug: Scalars['String'];
}>;

export type GetSingleBlogBySlugQuery = {
    __typename?: 'Query';
    blog?:
        | {
              __typename?: 'Blog';
              id: string;
              title: string;
              slug: string;
              featured: boolean;
              readTime: string;
              introduction: string;
              createdAt: any;
              content: {
                  __typename?: 'RichText';
                  markdown: string;
                  html: string;
                  raw: any;
              };
              thumbnail: { __typename?: 'Asset'; id: string; url: string };
              tags: Array<{
                  __typename?: 'Tag';
                  id: string;
                  value: string;
                  colorScheme: ColorScheme;
              }>;
          }
        | null
        | undefined;
};

export type GetSingleProjectBySlugQueryVariables = Exact<{
    slug: Scalars['String'];
}>;

export type GetSingleProjectBySlugQuery = {
    __typename?: 'Query';
    project?:
        | {
              __typename?: 'Project';
              id: string;
              title: string;
              slug: string;
              featured: boolean;
              readTime: string;
              introduction: string;
              createdAt: any;
              content: {
                  __typename?: 'RichText';
                  markdown: string;
                  html: string;
                  raw: any;
              };
              thumbnail: { __typename?: 'Asset'; id: string; url: string };
              tags: Array<{
                  __typename?: 'Tag';
                  id: string;
                  value: string;
                  colorScheme: ColorScheme;
              }>;
          }
        | null
        | undefined;
};

export const GetAllBlogSlugsDocument = gql`
    query getAllBlogSlugs {
        blogs {
            slug
        }
    }
`;

/**
 * __useGetAllBlogSlugsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogSlugsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllBlogSlugsQuery,
        GetAllBlogSlugsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllBlogSlugsQuery, GetAllBlogSlugsQueryVariables>(
        GetAllBlogSlugsDocument,
        options
    );
}
export function useGetAllBlogSlugsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllBlogSlugsQuery,
        GetAllBlogSlugsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetAllBlogSlugsQuery,
        GetAllBlogSlugsQueryVariables
    >(GetAllBlogSlugsDocument, options);
}
export type GetAllBlogSlugsQueryHookResult = ReturnType<
    typeof useGetAllBlogSlugsQuery
>;
export type GetAllBlogSlugsLazyQueryHookResult = ReturnType<
    typeof useGetAllBlogSlugsLazyQuery
>;
export type GetAllBlogSlugsQueryResult = Apollo.QueryResult<
    GetAllBlogSlugsQuery,
    GetAllBlogSlugsQueryVariables
>;
export const GetAllBlogsDocument = gql`
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

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllBlogsQuery,
        GetAllBlogsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(
        GetAllBlogsDocument,
        options
    );
}
export function useGetAllBlogsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllBlogsQuery,
        GetAllBlogsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(
        GetAllBlogsDocument,
        options
    );
}
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<
    typeof useGetAllBlogsLazyQuery
>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<
    GetAllBlogsQuery,
    GetAllBlogsQueryVariables
>;
export const GetAllProjectSlugsDocument = gql`
    query getAllProjectSlugs {
        projects {
            slug
        }
    }
`;

/**
 * __useGetAllProjectSlugsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectSlugsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllProjectSlugsQuery,
        GetAllProjectSlugsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetAllProjectSlugsQuery,
        GetAllProjectSlugsQueryVariables
    >(GetAllProjectSlugsDocument, options);
}
export function useGetAllProjectSlugsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllProjectSlugsQuery,
        GetAllProjectSlugsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetAllProjectSlugsQuery,
        GetAllProjectSlugsQueryVariables
    >(GetAllProjectSlugsDocument, options);
}
export type GetAllProjectSlugsQueryHookResult = ReturnType<
    typeof useGetAllProjectSlugsQuery
>;
export type GetAllProjectSlugsLazyQueryHookResult = ReturnType<
    typeof useGetAllProjectSlugsLazyQuery
>;
export type GetAllProjectSlugsQueryResult = Apollo.QueryResult<
    GetAllProjectSlugsQuery,
    GetAllProjectSlugsQueryVariables
>;
export const GetAllProjectsDocument = gql`
    query getAllProjects {
        projects {
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

/**
 * __useGetAllProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllProjectsQuery,
        GetAllProjectsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
        GetAllProjectsDocument,
        options
    );
}
export function useGetAllProjectsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllProjectsQuery,
        GetAllProjectsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetAllProjectsQuery,
        GetAllProjectsQueryVariables
    >(GetAllProjectsDocument, options);
}
export type GetAllProjectsQueryHookResult = ReturnType<
    typeof useGetAllProjectsQuery
>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<
    typeof useGetAllProjectsLazyQuery
>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
>;
export const GetFeaturedBlogsDocument = gql`
    query getFeaturedBlogs {
        blogs(where: { featured: true }) {
            id
            title
            slug
            featured
            thumbnail {
                id
                url
            }
            introduction
            createdAt
            readTime
            tags {
                id
                value
                colorScheme
            }
        }
    }
`;

/**
 * __useGetFeaturedBlogsQuery__
 *
 * To run a query within a React component, call `useGetFeaturedBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedBlogsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetFeaturedBlogsQuery,
        GetFeaturedBlogsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetFeaturedBlogsQuery,
        GetFeaturedBlogsQueryVariables
    >(GetFeaturedBlogsDocument, options);
}
export function useGetFeaturedBlogsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetFeaturedBlogsQuery,
        GetFeaturedBlogsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetFeaturedBlogsQuery,
        GetFeaturedBlogsQueryVariables
    >(GetFeaturedBlogsDocument, options);
}
export type GetFeaturedBlogsQueryHookResult = ReturnType<
    typeof useGetFeaturedBlogsQuery
>;
export type GetFeaturedBlogsLazyQueryHookResult = ReturnType<
    typeof useGetFeaturedBlogsLazyQuery
>;
export type GetFeaturedBlogsQueryResult = Apollo.QueryResult<
    GetFeaturedBlogsQuery,
    GetFeaturedBlogsQueryVariables
>;
export const GetFeaturedProjectsDocument = gql`
    query getFeaturedProjects {
        projects(where: { featured: true }) {
            id
            title
            slug
            featured
            thumbnail {
                id
                url
            }
            introduction
            createdAt
            readTime
            tags {
                id
                value
                colorScheme
            }
        }
    }
`;

/**
 * __useGetFeaturedProjectsQuery__
 *
 * To run a query within a React component, call `useGetFeaturedProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeaturedProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeaturedProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeaturedProjectsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetFeaturedProjectsQuery,
        GetFeaturedProjectsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetFeaturedProjectsQuery,
        GetFeaturedProjectsQueryVariables
    >(GetFeaturedProjectsDocument, options);
}
export function useGetFeaturedProjectsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetFeaturedProjectsQuery,
        GetFeaturedProjectsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetFeaturedProjectsQuery,
        GetFeaturedProjectsQueryVariables
    >(GetFeaturedProjectsDocument, options);
}
export type GetFeaturedProjectsQueryHookResult = ReturnType<
    typeof useGetFeaturedProjectsQuery
>;
export type GetFeaturedProjectsLazyQueryHookResult = ReturnType<
    typeof useGetFeaturedProjectsLazyQuery
>;
export type GetFeaturedProjectsQueryResult = Apollo.QueryResult<
    GetFeaturedProjectsQuery,
    GetFeaturedProjectsQueryVariables
>;
export const GetSingleBlogBySlugDocument = gql`
    query getSingleBlogBySlug($slug: String!) {
        blog(where: { slug: $slug }) {
            id
            title
            slug
            featured
            readTime
            introduction
            content {
                markdown
                html
                raw
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

/**
 * __useGetSingleBlogBySlugQuery__
 *
 * To run a query within a React component, call `useGetSingleBlogBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleBlogBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleBlogBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetSingleBlogBySlugQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetSingleBlogBySlugQuery,
        GetSingleBlogBySlugQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetSingleBlogBySlugQuery,
        GetSingleBlogBySlugQueryVariables
    >(GetSingleBlogBySlugDocument, options);
}
export function useGetSingleBlogBySlugLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetSingleBlogBySlugQuery,
        GetSingleBlogBySlugQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetSingleBlogBySlugQuery,
        GetSingleBlogBySlugQueryVariables
    >(GetSingleBlogBySlugDocument, options);
}
export type GetSingleBlogBySlugQueryHookResult = ReturnType<
    typeof useGetSingleBlogBySlugQuery
>;
export type GetSingleBlogBySlugLazyQueryHookResult = ReturnType<
    typeof useGetSingleBlogBySlugLazyQuery
>;
export type GetSingleBlogBySlugQueryResult = Apollo.QueryResult<
    GetSingleBlogBySlugQuery,
    GetSingleBlogBySlugQueryVariables
>;
export const GetSingleProjectBySlugDocument = gql`
    query getSingleProjectBySlug($slug: String!) {
        project(where: { slug: $slug }) {
            id
            title
            slug
            featured
            readTime
            introduction
            content {
                markdown
                html
                raw
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

/**
 * __useGetSingleProjectBySlugQuery__
 *
 * To run a query within a React component, call `useGetSingleProjectBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleProjectBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleProjectBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetSingleProjectBySlugQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetSingleProjectBySlugQuery,
        GetSingleProjectBySlugQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetSingleProjectBySlugQuery,
        GetSingleProjectBySlugQueryVariables
    >(GetSingleProjectBySlugDocument, options);
}
export function useGetSingleProjectBySlugLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetSingleProjectBySlugQuery,
        GetSingleProjectBySlugQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetSingleProjectBySlugQuery,
        GetSingleProjectBySlugQueryVariables
    >(GetSingleProjectBySlugDocument, options);
}
export type GetSingleProjectBySlugQueryHookResult = ReturnType<
    typeof useGetSingleProjectBySlugQuery
>;
export type GetSingleProjectBySlugLazyQueryHookResult = ReturnType<
    typeof useGetSingleProjectBySlugLazyQuery
>;
export type GetSingleProjectBySlugQueryResult = Apollo.QueryResult<
    GetSingleProjectBySlugQuery,
    GetSingleProjectBySlugQueryVariables
>;

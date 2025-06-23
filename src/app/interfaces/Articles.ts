export interface ArticlesResponse {
    typeOf:                 TypeOf;
    id:                     number;
    title:                  string;
    description:            string;
    readablePublishDate:    ReadablePublishDate;
    slug:                   string;
    path:                   string;
    url:                    string;
    commentsCount:          number;
    publicReactionsCount:   number;
    collectionID:           number | null;
    publishedTimestamp:     Date;
    language:               Language | null;
    subforemID:             number | null;
    positiveReactionsCount: number;
    coverImage:             null | string;
    socialImage:            string;
    canonicalURL:           string;
    createdAt:              Date;
    editedAt:               Date | null;
    crosspostedAt:          null;
    publishedAt:            Date;
    lastCommentAt:          Date;
    readingTimeMinutes:     number;
    tagList:                string[];
    tags:                   string;
    user:                   User;
    flareTag?:              FlareTag;
    organization?:          Organization;
}

export interface FlareTag {
    name:         string;
    bgColorHex:   string;
    textColorHex: string;
}

export enum Language {
    En = "en",
}

export interface Organization {
    name:           string;
    username:       string;
    slug:           string;
    profileImage:   string;
    profileImage90: string;
}

export enum ReadablePublishDate {
    Jun22 = "Jun 22",
    Jun23 = "Jun 23",
}

export enum TypeOf {
    Article = "article",
}

export interface User {
    name:            string;
    username:        string;
    twitterUsername: null | string;
    githubUsername:  null | string;
    userID:          number;
    websiteURL:      null | string;
    profileImage:    string;
    profileImage90:  string;
}

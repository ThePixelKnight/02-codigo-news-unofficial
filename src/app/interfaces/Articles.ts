export interface ArticlesResponse {
    typeOf:                 "article";
    id:                     number;
    title:                  string;
    description:            string;
    readablePublishDate:    string;
    slug:                   string;
    path:                   string;
    url:                    string;
    commentsCount:          number;
    publicReactionsCount:   number;
    collectionID:           number | null;
    publishedTimestamp:     Date;
    language:               "en";
    subforemID:             number;
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
    organization?:          Organization;
    flareTag?:              FlareTag;
}

export interface FlareTag {
    name:         string;
    bgColorHex:   string;
    textColorHex: string;
}

export interface Organization {
    name:           string;
    username:       string;
    slug:           string;
    profileImage:   string;
    profileImage90: string;
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

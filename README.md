<div align="center">

[![Visit Shutterstock](./header.png)](https://developers.shutterstock.com)

# [Shutterstock](https://developers.shutterstock.com)<a id="shutterstock"></a>

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`shutterstock.audio.addTracksToCollection`](#shutterstockaudioaddtrackstocollection)
  * [`shutterstock.audio.createCollections`](#shutterstockaudiocreatecollections)
  * [`shutterstock.audio.deleteCollection`](#shutterstockaudiodeletecollection)
  * [`shutterstock.audio.getCollectionDetails`](#shutterstockaudiogetcollectiondetails)
  * [`shutterstock.audio.getTrackDetails`](#shutterstockaudiogettrackdetails)
  * [`shutterstock.audio.licenseTracks`](#shutterstockaudiolicensetracks)
  * [`shutterstock.audio.listAudioLicenses`](#shutterstockaudiolistaudiolicenses)
  * [`shutterstock.audio.listCollectionItems`](#shutterstockaudiolistcollectionitems)
  * [`shutterstock.audio.listCollections`](#shutterstockaudiolistcollections)
  * [`shutterstock.audio.listGenres`](#shutterstockaudiolistgenres)
  * [`shutterstock.audio.listInstruments`](#shutterstockaudiolistinstruments)
  * [`shutterstock.audio.listMoods`](#shutterstockaudiolistmoods)
  * [`shutterstock.audio.listTracks`](#shutterstockaudiolisttracks)
  * [`shutterstock.audio.redownloadTracks`](#shutterstockaudioredownloadtracks)
  * [`shutterstock.audio.removeTracksFromCollection`](#shutterstockaudioremovetracksfromcollection)
  * [`shutterstock.audio.searchTracks`](#shutterstockaudiosearchtracks)
  * [`shutterstock.audio.setCollectionName`](#shutterstockaudiosetcollectionname)
  * [`shutterstock.catalog.addToCollectionItems`](#shutterstockcatalogaddtocollectionitems)
  * [`shutterstock.catalog.createCollection`](#shutterstockcatalogcreatecollection)
  * [`shutterstock.catalog.deleteCollection`](#shutterstockcatalogdeletecollection)
  * [`shutterstock.catalog.listCollections`](#shutterstockcataloglistcollections)
  * [`shutterstock.catalog.removeItemsFromCollection`](#shutterstockcatalogremoveitemsfromcollection)
  * [`shutterstock.catalog.searchAssets`](#shutterstockcatalogsearchassets)
  * [`shutterstock.catalog.updateCollectionMetadata`](#shutterstockcatalogupdatecollectionmetadata)
  * [`shutterstock.computerVision.listSimilarImages`](#shutterstockcomputervisionlistsimilarimages)
  * [`shutterstock.computerVision.listSimilarVideos`](#shutterstockcomputervisionlistsimilarvideos)
  * [`shutterstock.computerVision.listSuggestedKeywords`](#shutterstockcomputervisionlistsuggestedkeywords)
  * [`shutterstock.computerVision.uploadImage`](#shutterstockcomputervisionuploadimage)
  * [`shutterstock.computerVision.uploadImageEphemeral`](#shutterstockcomputervisionuploadimageephemeral)
  * [`shutterstock.contributors.getCollectionDetails`](#shutterstockcontributorsgetcollectiondetails)
  * [`shutterstock.contributors.getCollectionItems`](#shutterstockcontributorsgetcollectionitems)
  * [`shutterstock.contributors.getDetails`](#shutterstockcontributorsgetdetails)
  * [`shutterstock.contributors.getDetailsMultiple`](#shutterstockcontributorsgetdetailsmultiple)
  * [`shutterstock.contributors.listCollections`](#shutterstockcontributorslistcollections)
  * [`shutterstock.customMusic.createRenderedAudio`](#shutterstockcustommusiccreaterenderedaudio)
  * [`shutterstock.customMusic.getAudioRendersDetails`](#shutterstockcustommusicgetaudiorendersdetails)
  * [`shutterstock.customMusic.listAudioDescriptors`](#shutterstockcustommusiclistaudiodescriptors)
  * [`shutterstock.customMusic.listComputerAudioInstruments`](#shutterstockcustommusiclistcomputeraudioinstruments)
  * [`shutterstock.editorialImages.getDetails`](#shutterstockeditorialimagesgetdetails)
  * [`shutterstock.editorialImages.getImageDetails`](#shutterstockeditorialimagesgetimagedetails)
  * [`shutterstock.editorialImages.getLivefeedImages`](#shutterstockeditorialimagesgetlivefeedimages)
  * [`shutterstock.editorialImages.getLivefeedItems`](#shutterstockeditorialimagesgetlivefeeditems)
  * [`shutterstock.editorialImages.getLivefeedItems_0`](#shutterstockeditorialimagesgetlivefeeditems_0)
  * [`shutterstock.editorialImages.getLivefeedItems_1`](#shutterstockeditorialimagesgetlivefeeditems_1)
  * [`shutterstock.editorialImages.getLivefeedList`](#shutterstockeditorialimagesgetlivefeedlist)
  * [`shutterstock.editorialImages.licenseContent`](#shutterstockeditorialimageslicensecontent)
  * [`shutterstock.editorialImages.licenseContent_0`](#shutterstockeditorialimageslicensecontent_0)
  * [`shutterstock.editorialImages.listCategories`](#shutterstockeditorialimageslistcategories)
  * [`shutterstock.editorialImages.listCategories_0`](#shutterstockeditorialimageslistcategories_0)
  * [`shutterstock.editorialImages.listLicenses`](#shutterstockeditorialimageslistlicenses)
  * [`shutterstock.editorialImages.listLivefeedImages`](#shutterstockeditorialimageslistlivefeedimages)
  * [`shutterstock.editorialImages.listUpdatedContent`](#shutterstockeditorialimageslistupdatedcontent)
  * [`shutterstock.editorialImages.listUpdatedContent_0`](#shutterstockeditorialimageslistupdatedcontent_0)
  * [`shutterstock.editorialImages.search`](#shutterstockeditorialimagessearch)
  * [`shutterstock.editorialImages.searchContent`](#shutterstockeditorialimagessearchcontent)
  * [`shutterstock.editorialVideo.getContentDetails`](#shutterstockeditorialvideogetcontentdetails)
  * [`shutterstock.editorialVideo.licenseVideos`](#shutterstockeditorialvideolicensevideos)
  * [`shutterstock.editorialVideo.listVideoCategories`](#shutterstockeditorialvideolistvideocategories)
  * [`shutterstock.editorialVideo.listVideoLicenses`](#shutterstockeditorialvideolistvideolicenses)
  * [`shutterstock.editorialVideo.searchVideoContent`](#shutterstockeditorialvideosearchvideocontent)
  * [`shutterstock.images.addToCollectionItems`](#shutterstockimagesaddtocollectionitems)
  * [`shutterstock.images.createCollection`](#shutterstockimagescreatecollection)
  * [`shutterstock.images.deleteCollection`](#shutterstockimagesdeletecollection)
  * [`shutterstock.images.extractKeywordsFromText`](#shutterstockimagesextractkeywordsfromtext)
  * [`shutterstock.images.featuredCollectionDetails`](#shutterstockimagesfeaturedcollectiondetails)
  * [`shutterstock.images.getCollectionDetails`](#shutterstockimagesgetcollectiondetails)
  * [`shutterstock.images.getCollectionItems`](#shutterstockimagesgetcollectionitems)
  * [`shutterstock.images.getCollectionItems_0`](#shutterstockimagesgetcollectionitems_0)
  * [`shutterstock.images.getDetails`](#shutterstockimagesgetdetails)
  * [`shutterstock.images.getSearchSuggestions`](#shutterstockimagesgetsearchsuggestions)
  * [`shutterstock.images.licenseImagesForMultiple`](#shutterstockimageslicenseimagesformultiple)
  * [`shutterstock.images.listCategories`](#shutterstockimageslistcategories)
  * [`shutterstock.images.listCollections`](#shutterstockimageslistcollections)
  * [`shutterstock.images.listFeaturedCollections`](#shutterstockimageslistfeaturedcollections)
  * [`shutterstock.images.listInfo`](#shutterstockimageslistinfo)
  * [`shutterstock.images.listLicenses`](#shutterstockimageslistlicenses)
  * [`shutterstock.images.listRecommendedImages`](#shutterstockimageslistrecommendedimages)
  * [`shutterstock.images.listSimilarImages`](#shutterstockimageslistsimilarimages)
  * [`shutterstock.images.listUpdatedContent`](#shutterstockimageslistupdatedcontent)
  * [`shutterstock.images.redownloadLicense`](#shutterstockimagesredownloadlicense)
  * [`shutterstock.images.removeFromCollection`](#shutterstockimagesremovefromcollection)
  * [`shutterstock.images.renameCollection`](#shutterstockimagesrenamecollection)
  * [`shutterstock.images.runMultipleSearches`](#shutterstockimagesrunmultiplesearches)
  * [`shutterstock.images.searchImages`](#shutterstockimagessearchimages)
  * [`shutterstock.oauth.authorizeApplications`](#shutterstockoauthauthorizeapplications)
  * [`shutterstock.oauth.getUserAccessToken`](#shutterstockoauthgetuseraccesstoken)
  * [`shutterstock.soundEffects.getDetails`](#shutterstocksoundeffectsgetdetails)
  * [`shutterstock.soundEffects.licenseAssets`](#shutterstocksoundeffectslicenseassets)
  * [`shutterstock.soundEffects.listDetails`](#shutterstocksoundeffectslistdetails)
  * [`shutterstock.soundEffects.listLicenses`](#shutterstocksoundeffectslistlicenses)
  * [`shutterstock.soundEffects.redownloadLicenses`](#shutterstocksoundeffectsredownloadlicenses)
  * [`shutterstock.soundEffects.searchSoundEffects`](#shutterstocksoundeffectssearchsoundeffects)
  * [`shutterstock.test.echoText`](#shutterstocktestechotext)
  * [`shutterstock.test.inputValidation`](#shutterstocktestinputvalidation)
  * [`shutterstock.users.getAccessTokenDetails`](#shutterstockusersgetaccesstokendetails)
  * [`shutterstock.users.getUserDetails`](#shutterstockusersgetuserdetails)
  * [`shutterstock.users.listSubscriptions`](#shutterstockuserslistsubscriptions)
  * [`shutterstock.videos.addToCollectionItems`](#shutterstockvideosaddtocollectionitems)
  * [`shutterstock.videos.collectionDetailsGet`](#shutterstockvideoscollectiondetailsget)
  * [`shutterstock.videos.collectionDetailsGet_0`](#shutterstockvideoscollectiondetailsget_0)
  * [`shutterstock.videos.createVideoCollections`](#shutterstockvideoscreatevideocollections)
  * [`shutterstock.videos.deleteCollection`](#shutterstockvideosdeletecollection)
  * [`shutterstock.videos.findSimilar`](#shutterstockvideosfindsimilar)
  * [`shutterstock.videos.getCollectionItems`](#shutterstockvideosgetcollectionitems)
  * [`shutterstock.videos.getFeaturedCollectionItems`](#shutterstockvideosgetfeaturedcollectionitems)
  * [`shutterstock.videos.licenseVideos`](#shutterstockvideoslicensevideos)
  * [`shutterstock.videos.listCategories`](#shutterstockvideoslistcategories)
  * [`shutterstock.videos.listCollections`](#shutterstockvideoslistcollections)
  * [`shutterstock.videos.listFeaturedVideoCollections`](#shutterstockvideoslistfeaturedvideocollections)
  * [`shutterstock.videos.listLicenses`](#shutterstockvideoslistlicenses)
  * [`shutterstock.videos.listUpdatedVideos`](#shutterstockvideoslistupdatedvideos)
  * [`shutterstock.videos.listVideo`](#shutterstockvideoslistvideo)
  * [`shutterstock.videos.redownloadDownloads`](#shutterstockvideosredownloaddownloads)
  * [`shutterstock.videos.removeFromCollection`](#shutterstockvideosremovefromcollection)
  * [`shutterstock.videos.searchSuggestions`](#shutterstockvideossearchsuggestions)
  * [`shutterstock.videos.searchVideo`](#shutterstockvideossearchvideo)
  * [`shutterstock.videos.setNewName`](#shutterstockvideossetnewname)
  * [`shutterstock.videos.videoDetails`](#shutterstockvideosvideodetails)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Shutterstock&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Shutterstock } from "shutterstock-typescript-sdk";

const shutterstock = new Shutterstock({
  // Defining the base path is optional and defaults to https://api.shutterstock.com
  // basePath: "https://api.shutterstock.com",
});

const addTracksToCollectionResponse =
  await shutterstock.audio.addTracksToCollection({
    id: "id_example",
    items: [
      {
        added_time: "2020-05-29T17:10:22Z",
        id: "297886754",
        media_type: "image",
      },
    ],
  });

console.log(addTracksToCollectionResponse);
```

## Reference<a id="reference"></a>


### `shutterstock.audio.addTracksToCollection`<a id="shutterstockaudioaddtrackstocollection"></a>

This endpoint adds one or more tracks to a collection by track IDs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTracksToCollectionResponse =
  await shutterstock.audio.addTracksToCollection({
    id: "id_example",
    items: [
      {
        added_time: "2020-05-29T17:10:22Z",
        id: "297886754",
        media_type: "image",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`CollectionItem`](./models/collection-item.ts)[]<a id="items-collectionitemmodelscollection-itemts"></a>

List of items

##### id: `string`<a id="id-string"></a>

Collection ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections/{id}/items` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.createCollections`<a id="shutterstockaudiocreatecollections"></a>

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCollectionsResponse = await shutterstock.audio.createCollections({
  name: "Test Collection 19cf",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionCreateResponse](./models/collection-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.deleteCollection`<a id="shutterstockaudiodeletecollection"></a>

This endpoint deletes a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCollectionResponse = await shutterstock.audio.deleteCollection({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.getCollectionDetails`<a id="shutterstockaudiogetcollectiondetails"></a>

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionDetailsResponse =
  await shutterstock.audio.getCollectionDetails({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### embed: `string`[]<a id="embed-string"></a>

Which sharing information to include in the response, such as a URL to the collection

##### shareCode: `string`<a id="sharecode-string"></a>

Code to retrieve a shared collection

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.getTrackDetails`<a id="shutterstockaudiogettrackdetails"></a>

This endpoint shows information about a track, including its genres, instruments, and other attributes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTrackDetailsResponse = await shutterstock.audio.getTrackDetails({
  id: 1,
  view: "full",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Audio track ID

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[Audio](./models/audio.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.licenseTracks`<a id="shutterstockaudiolicensetracks"></a>

This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseTracksResponse = await shutterstock.audio.licenseTracks({
  license: "audio_platform",
  audio: [
    {
      audio_id: "123456789",
      license: "audio_platform",
      search_id: "987654321",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### audio: [`LicenseAudio`](./models/license-audio.ts)[]<a id="audio-licenseaudiomodelslicense-audiots"></a>

List of audio tracks to license

##### license: `'audio_platform' | 'premier_music_basic' | 'premier_music_extended' | 'premier_music_pro' | 'premier_music_comp' | 'asset_all_music'`<a id="license-audio_platform--premier_music_basic--premier_music_extended--premier_music_pro--premier_music_comp--asset_all_music"></a>

License type

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that led to licensing this track

#### 🔄 Return<a id="🔄-return"></a>

[LicenseAudioResultDataList](./models/license-audio-result-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listAudioLicenses`<a id="shutterstockaudiolistaudiolicenses"></a>

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAudioLicensesResponse = await shutterstock.audio.listAudioLicenses({
  page: 1,
  perPage: 20,
  sort: "newest",
  downloadAvailability: "all",
  teamHistory: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### audioId: `string`<a id="audioid-string"></a>

Show licenses for the specified track ID

##### license: `string`<a id="license-string"></a>

Restrict results by license. Prepending a `-` sign will exclude results by license

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

##### username: `string`<a id="username-string"></a>

Filter licenses by username of licensee

##### startDate: `string`<a id="startdate-string"></a>

Show licenses created on or after the specified date

##### endDate: `string`<a id="enddate-string"></a>

Show licenses created before the specified date

##### downloadAvailability: `'all' | 'downloadable' | 'non_downloadable'`<a id="downloadavailability-all--downloadable--non_downloadable"></a>

Filter licenses by download availability

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

Set to true to see license history for all members of your team.

#### 🔄 Return<a id="🔄-return"></a>

[DownloadHistoryDataList](./models/download-history-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/licenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listCollectionItems`<a id="shutterstockaudiolistcollectionitems"></a>

This endpoint lists the IDs of tracks in a collection and the date that each was added.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionItemsResponse =
  await shutterstock.audio.listCollectionItems({
    id: "id_example",
    page: 1,
    perPage: 100,
    sort: "oldest",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### shareCode: `string`<a id="sharecode-string"></a>

Code to retrieve the contents of a shared collection

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

#### 🔄 Return<a id="🔄-return"></a>

[CollectionItemDataList](./models/collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listCollections`<a id="shutterstockaudiolistcollections"></a>

This endpoint lists your collections of audio tracks and their basic attributes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await shutterstock.audio.listCollections({
  page: 1,
  perPage: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### embed: `string`[]<a id="embed-string"></a>

Which sharing information to include in the response, such as a URL to the collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionDataList](./models/collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listGenres`<a id="shutterstockaudiolistgenres"></a>

This endpoint returns a list of all audio genres.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGenresResponse = await shutterstock.audio.listGenres({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: `string`<a id="language-string"></a>

Which language the genres will be returned

#### 🔄 Return<a id="🔄-return"></a>

[GenreList](./models/genre-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/genres` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listInstruments`<a id="shutterstockaudiolistinstruments"></a>

This endpoint returns a list of all audio instruments.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInstrumentsResponse = await shutterstock.audio.listInstruments({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: `string`<a id="language-string"></a>

Which language the instruments will be returned in

#### 🔄 Return<a id="🔄-return"></a>

[InstrumentList](./models/instrument-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/instruments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listMoods`<a id="shutterstockaudiolistmoods"></a>

This endpoint returns a list of all audio moods.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMoodsResponse = await shutterstock.audio.listMoods({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: `string`<a id="language-string"></a>

Which language the moods will be returned in

#### 🔄 Return<a id="🔄-return"></a>

[MoodList](./models/mood-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/moods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.listTracks`<a id="shutterstockaudiolisttracks"></a>

This endpoint lists information about one or more audio tracks, including the description and publication date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTracksResponse = await shutterstock.audio.listTracks({
  id: ["68072888001528021798096225500"],
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

One or more audio IDs

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[AudioDataList](./models/audio-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.redownloadTracks`<a id="shutterstockaudioredownloadtracks"></a>

This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redownloadTracksResponse = await shutterstock.audio.redownloadTracks({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

License ID

#### 🔄 Return<a id="🔄-return"></a>

[AudioUrl](./models/audio-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/licenses/{id}/downloads` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.removeTracksFromCollection`<a id="shutterstockaudioremovetracksfromcollection"></a>

This endpoint removes one or more tracks from a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTracksFromCollectionResponse =
  await shutterstock.audio.removeTracksFromCollection({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### itemId: `string`[]<a id="itemid-string"></a>

One or more item IDs to remove from the collection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections/{id}/items` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.searchTracks`<a id="shutterstockaudiosearchtracks"></a>

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchTracksResponse = await shutterstock.audio.searchTracks({
  page: 1,
  perPage: 20,
  sort: "score",
  sortOrder: "desc",
  view: "minimal",
  library: "premier",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### artists: `string`[]<a id="artists-string"></a>

Show tracks with one of the specified artist names or IDs

##### bpm: `number`<a id="bpm-number"></a>

(Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute

##### bpmFrom: `number`<a id="bpmfrom-number"></a>

Show tracks with the specified beats per minute or faster

##### bpmTo: `number`<a id="bpmto-number"></a>

Show tracks with the specified beats per minute or slower

##### duration: `number`<a id="duration-number"></a>

Show tracks with the specified duration in seconds

##### durationFrom: `number`<a id="durationfrom-number"></a>

Show tracks with the specified duration or longer in seconds

##### durationTo: `number`<a id="durationto-number"></a>

Show tracks with the specified duration or shorter in seconds

##### genre: `string`[]<a id="genre-string"></a>

Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`

##### isInstrumental: `boolean`<a id="isinstrumental-boolean"></a>

Show instrumental music only

##### instruments: `string`[]<a id="instruments-string"></a>

Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`

##### moods: `string`[]<a id="moods-string"></a>

Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces

##### sort: `'score' | 'ranking_all' | 'artist' | 'title' | 'bpm' | 'freshness' | 'duration'`<a id="sort-score--ranking_all--artist--title--bpm--freshness--duration"></a>

Sort by

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Sort order

##### vocalDescription: `string`<a id="vocaldescription-string"></a>

Show tracks with the specified vocal description (male, female)

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### fields: `string`<a id="fields-string"></a>

Fields to display in the response; see the documentation for the fields parameter in the overview section

##### library: `'shutterstock' | 'premier'`<a id="library-shutterstock--premier"></a>

Which library to search

##### language: `string`<a id="language-string"></a>

Which language to search in

#### 🔄 Return<a id="🔄-return"></a>

[AudioSearchResults](./models/audio-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.audio.setCollectionName`<a id="shutterstockaudiosetcollectionname"></a>

This endpoint sets a new name for a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setCollectionNameResponse = await shutterstock.audio.setCollectionName({
  id: "id_example",
  name: "My collection with a new name",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The new name of the collection

##### id: `string`<a id="id-string"></a>

Collection ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/audio/collections/{id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.addToCollectionItems`<a id="shutterstockcatalogaddtocollectionitems"></a>

This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToCollectionItemsResponse =
  await shutterstock.catalog.addToCollectionItems({
    collectionId: "collectionId_example",
    items: [
      {
        asset: {
          id: "1690105108X",
          type: "image",
        },
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`CreateCatalogCollectionItem`](./models/create-catalog-collection-item.ts)[]<a id="items-createcatalogcollectionitemmodelscreate-catalog-collection-itemts"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

The ID of the collection to add assets to

#### 🔄 Return<a id="🔄-return"></a>

[CatalogCollection](./models/catalog-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/collections/{collection_id}/items` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.createCollection`<a id="shutterstockcatalogcreatecollection"></a>

This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCollectionResponse = await shutterstock.catalog.createCollection({
  name: "New Collection",
  visibility: "private",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### items: [`CreateCatalogCollectionItem`](./models/create-catalog-collection-item.ts)[]<a id="items-createcatalogcollectionitemmodelscreate-catalog-collection-itemts"></a>

##### visibility: `string`<a id="visibility-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CatalogCollection](./models/catalog-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.deleteCollection`<a id="shutterstockcatalogdeletecollection"></a>

This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCollectionResponse = await shutterstock.catalog.deleteCollection({
  collectionId: "collectionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

The ID of the collection to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/collections/{collection_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.listCollections`<a id="shutterstockcataloglistcollections"></a>

This endpoint returns a list of catalog collections.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await shutterstock.catalog.listCollections({
  page: 1,
  perPage: 20,
  sort: "newest",
  shared: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort by

##### shared: `boolean`<a id="shared-boolean"></a>

Set to true to omit collections that you own and return only collections  that are shared with you

#### 🔄 Return<a id="🔄-return"></a>

[CatalogCollectionDataList](./models/catalog-collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.removeItemsFromCollection`<a id="shutterstockcatalogremoveitemsfromcollection"></a>

This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeItemsFromCollectionResponse =
  await shutterstock.catalog.removeItemsFromCollection({
    collectionId: "collectionId_example",
    items: [
      {
        id: "123X",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`RemoveCatalogCollectionItem`](./models/remove-catalog-collection-item.ts)[]<a id="items-removecatalogcollectionitemmodelsremove-catalog-collection-itemts"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

The ID of the collection to remove assets from

#### 🔄 Return<a id="🔄-return"></a>

[CatalogCollection](./models/catalog-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/collections/{collection_id}/items` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.searchAssets`<a id="shutterstockcatalogsearchassets"></a>

This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchAssetsResponse = await shutterstock.catalog.searchAssets({
  sort: "newest",
  page: 1,
  perPage: 20,
  collectionId: ["123456", "456789", "13579"],
  assetType: ["image", "editorial-image"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort by

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces

##### collectionId: `string`[]<a id="collectionid-string"></a>

Filter by collection id

##### assetType: `string`[]<a id="assettype-string"></a>

Filter by asset type

#### 🔄 Return<a id="🔄-return"></a>

[CatalogCollectionItemDataList](./models/catalog-collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.catalog.updateCollectionMetadata`<a id="shutterstockcatalogupdatecollectionmetadata"></a>

This endpoint updates the metadata of a catalog collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCollectionMetadataResponse =
  await shutterstock.catalog.updateCollectionMetadata({
    collectionId: "collectionId_example",
    name: "My Collection",
    visibility: "public",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

ID of collection that needs to be modified

##### cover_asset: [`UpdateCatalogCollectionCoverAsset`](./models/update-catalog-collection-cover-asset.ts)<a id="cover_asset-updatecatalogcollectioncoverassetmodelsupdate-catalog-collection-cover-assetts"></a>

##### name: `string`<a id="name-string"></a>

##### visibility: `string`<a id="visibility-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CatalogCollection](./models/catalog-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/catalog/collections/{collection_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.computerVision.listSimilarImages`<a id="shutterstockcomputervisionlistsimilarimages"></a>

This endpoint returns images that are visually similar to an image that you specify or upload.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSimilarImagesResponse =
  await shutterstock.computerVision.listSimilarImages({
    assetId: "assetId_example",
    license: ["commercial"],
    safe: true,
    language: "cs",
    page: 1,
    perPage: 20,
    view: "minimal",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `string`<a id="assetid-string"></a>

The asset ID or upload ID to find similar images for

##### license: `string`[]<a id="license-string"></a>

Show only images with the specified license

##### safe: `boolean`<a id="safe-boolean"></a>

Enable or disable safe search

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

#### 🔄 Return<a id="🔄-return"></a>

[ImageSearchResults](./models/image-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cv/similar/images` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.computerVision.listSimilarVideos`<a id="shutterstockcomputervisionlistsimilarvideos"></a>

This endpoint returns videos that are visually similar to an image that you specify or upload.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSimilarVideosResponse =
  await shutterstock.computerVision.listSimilarVideos({
    assetId: "assetId_example",
    license: ["commercial"],
    safe: true,
    language: "cs",
    page: 1,
    perPage: 20,
    view: "minimal",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: `string`<a id="assetid-string"></a>

The asset ID or upload ID to find similar videos for

##### license: `string`[]<a id="license-string"></a>

Show only videos with the specified license

##### safe: `boolean`<a id="safe-boolean"></a>

Enable or disable safe search

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

#### 🔄 Return<a id="🔄-return"></a>

[VideoSearchResults](./models/video-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cv/similar/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.computerVision.listSuggestedKeywords`<a id="shutterstockcomputervisionlistsuggestedkeywords"></a>

This endpoint returns a list of suggested keywords for a media item that you specify or upload.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSuggestedKeywordsResponse =
  await shutterstock.computerVision.listSuggestedKeywords({
    assetId: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assetId: [`ComputervisionListSuggestedKeywordsAssetIdParameter`](./models/computervision-list-suggested-keywords-asset-id-parameter.ts)<a id="assetid-computervisionlistsuggestedkeywordsassetidparametermodelscomputervision-list-suggested-keywords-asset-id-parameterts"></a>

The asset ID or upload ID to suggest keywords for

#### 🔄 Return<a id="🔄-return"></a>

[KeywordDataList](./models/keyword-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cv/keywords` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.computerVision.uploadImage`<a id="shutterstockcomputervisionuploadimage"></a>

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadImageResponse = await shutterstock.computerVision.uploadImage({
  base64_image:
    "R0lGODlhgACAAPcAAEwiBLyaLOzNUNmWFNjOrNSuN7x6PPzqeOTMgfKSDMyuTPzwsdi2dHwuBPzbVu",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### base64_image: `string`<a id="base64_image-string"></a>

A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height

#### 🔄 Return<a id="🔄-return"></a>

[ComputerVisionImageCreateResponse](./models/computer-vision-image-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/cv/images` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.computerVision.uploadImageEphemeral`<a id="shutterstockcomputervisionuploadimageephemeral"></a>

Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadImageEphemeralResponse =
  await shutterstock.computerVision.uploadImageEphemeral({
    base64_image:
      "R0lGODlhgACAAPcAAEwiBLyaLOzNUNmWFNjOrNSuN7x6PPzqeOTMgfKSDMyuTPzwsdi2dHwuBPzbVu",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### base64_image: `string`<a id="base64_image-string"></a>

A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height

#### 🔄 Return<a id="🔄-return"></a>

[ImageCreateResponse](./models/image-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.contributors.getCollectionDetails`<a id="shutterstockcontributorsgetcollectiondetails"></a>

This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionDetailsResponse =
  await shutterstock.contributors.getCollectionDetails({
    contributorId: "contributorId_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contributorId: `string`<a id="contributorid-string"></a>

Contributor ID

##### id: `string`<a id="id-string"></a>

Collection ID that belongs to the contributor

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/contributors/{contributor_id}/collections/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.contributors.getCollectionItems`<a id="shutterstockcontributorsgetcollectionitems"></a>

This endpoint lists the IDs of items in a contributor's collection and the date that each was added.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionItemsResponse =
  await shutterstock.contributors.getCollectionItems({
    contributorId: "contributorId_example",
    id: "id_example",
    page: 1,
    perPage: 20,
    sort: "newest",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contributorId: `string`<a id="contributorid-string"></a>

Contributor ID

##### id: `string`<a id="id-string"></a>

Collection ID that belongs to the contributor

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

#### 🔄 Return<a id="🔄-return"></a>

[CollectionItemDataList](./models/collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/contributors/{contributor_id}/collections/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.contributors.getDetails`<a id="shutterstockcontributorsgetdetails"></a>

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await shutterstock.contributors.getDetails({
  contributorId: "contributorId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contributorId: `string`<a id="contributorid-string"></a>

Contributor ID

#### 🔄 Return<a id="🔄-return"></a>

[ContributorProfile](./models/contributor-profile.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/contributors/{contributor_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.contributors.getDetailsMultiple`<a id="shutterstockcontributorsgetdetailsmultiple"></a>

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsMultipleResponse =
  await shutterstock.contributors.getDetailsMultiple({
    id: ["id_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

One or more contributor IDs

#### 🔄 Return<a id="🔄-return"></a>

[ContributorProfileDataList](./models/contributor-profile-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/contributors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.contributors.listCollections`<a id="shutterstockcontributorslistcollections"></a>

This endpoint lists collections based on contributor ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await shutterstock.contributors.listCollections(
  {
    contributorId: "contributorId_example",
    sort: "newest",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contributorId: `string`<a id="contributorid-string"></a>

Contributor ID

##### sort: `'newest' | 'last_updated' | 'item_count'`<a id="sort-newest--last_updated--item_count"></a>

Sort order

#### 🔄 Return<a id="🔄-return"></a>

[CollectionDataList](./models/collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/contributors/{contributor_id}/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.customMusic.createRenderedAudio`<a id="shutterstockcustommusiccreaterenderedaudio"></a>

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRenderedAudioResponse =
  await shutterstock.customMusic.createRenderedAudio({
    audio_renders: [
      {
        filename: "My Project.mp3",
        preset: "MASTER_MP3",
        timeline: {},
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### audio_renders: [`CreateAudioRender`](./models/create-audio-render.ts)[]<a id="audio_renders-createaudiorendermodelscreate-audio-renderts"></a>

Parameters to create computer audio renders

#### 🔄 Return<a id="🔄-return"></a>

[AudioRendersListResults](./models/audio-renders-list-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/ai/audio/renders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.customMusic.getAudioRendersDetails`<a id="shutterstockcustommusicgetaudiorendersdetails"></a>

This endpoint shows the status of one or more audio renders, including download links for completed audio.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAudioRendersDetailsResponse =
  await shutterstock.customMusic.getAudioRendersDetails({
    id: ["id_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

One or more render IDs

#### 🔄 Return<a id="🔄-return"></a>

[AudioRendersListResults](./models/audio-renders-list-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/ai/audio/renders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.customMusic.listAudioDescriptors`<a id="shutterstockcustommusiclistaudiodescriptors"></a>

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAudioDescriptorsResponse =
  await shutterstock.customMusic.listAudioDescriptors({
    page: 1,
    perPage: 20,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### renderSpeedOver: `number`<a id="renderspeedover-number"></a>

Show descriptors with an average render speed that is greater than or equal to the specified value

##### bandId: `string`<a id="bandid-string"></a>

Show descriptors that contain the specified band (case-sentsitive)

##### bandName: `string`<a id="bandname-string"></a>

Show descriptors with the specified band name (case-sensitive)

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### id: `string`[]<a id="id-string"></a>

Show descriptors with the specified IDs (case-sensitive)

##### instrumentName: `string`<a id="instrumentname-string"></a>

Show descriptors with the specified instrument name (case-sensitive)

##### instrumentId: `string`<a id="instrumentid-string"></a>

Show descriptors with the specified instrument ID (case-sensitive)

##### tempo: `number`<a id="tempo-number"></a>

Show descriptors whose tempo range includes the specified tempo in beats per minute

##### tempoTo: `number`<a id="tempoto-number"></a>

Show descriptors with a tempo that is less than or equal to the specified number

##### tempoFrom: `number`<a id="tempofrom-number"></a>

Show descriptors that have a tempo range that includes the specified tempo in beats per minute

##### name: `string`<a id="name-string"></a>

Show descriptors with the specified name (case-sensitive)

##### tag: `string`<a id="tag-string"></a>

Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)

#### 🔄 Return<a id="🔄-return"></a>

[DescriptorsListResult](./models/descriptors-list-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/ai/audio/descriptors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.customMusic.listComputerAudioInstruments`<a id="shutterstockcustommusiclistcomputeraudioinstruments"></a>

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listComputerAudioInstrumentsResponse =
  await shutterstock.customMusic.listComputerAudioInstruments({
    perPage: 20,
    page: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

Show instruments with the specified ID

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### page: `number`<a id="page-number"></a>

Page number

##### name: `string`<a id="name-string"></a>

Show instruments with the specified name (case-sensitive)

##### tag: `string`<a id="tag-string"></a>

Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)

#### 🔄 Return<a id="🔄-return"></a>

[InstrumentsListResult](./models/instruments-list-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/ai/audio/instruments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getDetails`<a id="shutterstockeditorialimagesgetdetails"></a>

Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await shutterstock.editorialImages.getDetails({
  id: "id_example",
  country: "country_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial ID

##### country: `string`<a id="country-string"></a>

Returns only if the content is available for distribution in a certain country

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[EditorialContent](./models/editorial-content.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getImageDetails`<a id="shutterstockeditorialimagesgetimagedetails"></a>

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getImageDetailsResponse =
  await shutterstock.editorialImages.getImageDetails({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial ID

##### country: `string`<a id="country-string"></a>

Returns only if the content is available for distribution in a certain country

#### 🔄 Return<a id="🔄-return"></a>

[EditorialContent](./models/editorial-content.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getLivefeedImages`<a id="shutterstockeditorialimagesgetlivefeedimages"></a>

Get editorial livefeed

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLivefeedImagesResponse =
  await shutterstock.editorialImages.getLivefeedImages({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial livefeed ID; must be an URI encoded string

##### country: `string`<a id="country-string"></a>

Returns only if the livefeed is available for distribution in a certain country

#### 🔄 Return<a id="🔄-return"></a>

[EditorialImageLivefeed](./models/editorial-image-livefeed.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/livefeeds/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getLivefeedItems`<a id="shutterstockeditorialimagesgetlivefeeditems"></a>

Get editorial livefeed items

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLivefeedItemsResponse =
  await shutterstock.editorialImages.getLivefeedItems({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial livefeed ID; must be an URI encoded string

##### country: `string`<a id="country-string"></a>

Returns only if the livefeed items are available for distribution in a certain country

#### 🔄 Return<a id="🔄-return"></a>

[EditorialImageContentDataList](./models/editorial-image-content-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/livefeeds/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getLivefeedItems_0`<a id="shutterstockeditorialimagesgetlivefeeditems_0"></a>

Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLivefeedItems_0Response =
  await shutterstock.editorialImages.getLivefeedItems_0({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial livefeed ID; must be an URI encoded string

##### country: `string`<a id="country-string"></a>

Returns only if the livefeed is available for distribution in a certain country

#### 🔄 Return<a id="🔄-return"></a>

[EditorialLivefeed](./models/editorial-livefeed.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/livefeeds/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getLivefeedItems_1`<a id="shutterstockeditorialimagesgetlivefeeditems_1"></a>

Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLivefeedItems_1Response =
  await shutterstock.editorialImages.getLivefeedItems_1({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial livefeed ID; must be an URI encoded string

##### country: `string`<a id="country-string"></a>

Returns only if the livefeed items are available for distribution in a certain country

#### 🔄 Return<a id="🔄-return"></a>

[EditorialContentDataList](./models/editorial-content-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/livefeeds/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.getLivefeedList`<a id="shutterstockeditorialimagesgetlivefeedlist"></a>

Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLivefeedListResponse =
  await shutterstock.editorialImages.getLivefeedList({
    country: "country_example",
    page: 1,
    perPage: 20,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Returns only livefeeds that are available for distribution in a certain country

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[EditorialLivefeedList](./models/editorial-livefeed-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/livefeeds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.licenseContent`<a id="shutterstockeditorialimageslicensecontent"></a>

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseContentResponse =
  await shutterstock.editorialImages.licenseContent({
    country: null,
    editorial: [
      {
        editorial_id: "10687730b",
        license: "premier_editorial_comp",
        size: "original",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: [`ISOCountryCode`](./models/isocountry-code.ts)<a id="country-isocountrycodemodelsisocountry-codets"></a>

##### editorial: [`LicenseEditorialContent`](./models/license-editorial-content.ts)[]<a id="editorial-licenseeditorialcontentmodelslicense-editorial-contentts"></a>

Editorial content to license

#### 🔄 Return<a id="🔄-return"></a>

[LicenseEditorialContentResults](./models/license-editorial-content-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.licenseContent_0`<a id="shutterstockeditorialimageslicensecontent_0"></a>

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseContent_0Response =
  await shutterstock.editorialImages.licenseContent_0({
    country: null,
    editorial: [
      {
        editorial_id: "10687730b",
        license: "premier_editorial_comp",
        size: "original",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: [`ISOCountryCode`](./models/isocountry-code.ts)<a id="country-isocountrycodemodelsisocountry-codets"></a>

##### editorial: [`LicenseEditorialContent`](./models/license-editorial-content.ts)[]<a id="editorial-licenseeditorialcontentmodelslicense-editorial-contentts"></a>

Editorial content to license

#### 🔄 Return<a id="🔄-return"></a>

[LicenseEditorialContentResults](./models/license-editorial-content-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.listCategories`<a id="shutterstockeditorialimageslistcategories"></a>

Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse =
  await shutterstock.editorialImages.listCategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[EditorialCategoryResults](./models/editorial-category-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.listCategories_0`<a id="shutterstockeditorialimageslistcategories_0"></a>

This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategories_0Response =
  await shutterstock.editorialImages.listCategories_0();
```

#### 🔄 Return<a id="🔄-return"></a>

[EditorialImageCategoryResults](./models/editorial-image-category-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.listLicenses`<a id="shutterstockeditorialimageslistlicenses"></a>

This endpoint lists existing editorial image licenses.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLicensesResponse = await shutterstock.editorialImages.listLicenses({
  page: 1,
  perPage: 20,
  sort: "newest",
  downloadAvailability: "all",
  teamHistory: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### imageId: `string`<a id="imageid-string"></a>

Show licenses for the specified editorial image ID

##### license: `string`<a id="license-string"></a>

Show editorial images that are available with the specified license name

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

##### username: `string`<a id="username-string"></a>

Filter licenses by username of licensee

##### startDate: `string`<a id="startdate-string"></a>

Show licenses created on or after the specified date

##### endDate: `string`<a id="enddate-string"></a>

Show licenses created before the specified date

##### downloadAvailability: `'all' | 'downloadable' | 'non_downloadable'`<a id="downloadavailability-all--downloadable--non_downloadable"></a>

Filter licenses by download availability

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

Set to true to see license history for all members of your team.

#### 🔄 Return<a id="🔄-return"></a>

[DownloadHistoryDataList](./models/download-history-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/licenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.listLivefeedImages`<a id="shutterstockeditorialimageslistlivefeedimages"></a>

Get editorial livefeed list

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLivefeedImagesResponse =
  await shutterstock.editorialImages.listLivefeedImages({
    country: "country_example",
    page: 1,
    perPage: 20,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Returns only livefeeds that are available for distribution in a certain country

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[EditorialImageLivefeedList](./models/editorial-image-livefeed-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/livefeeds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.listUpdatedContent`<a id="shutterstockeditorialimageslistupdatedcontent"></a>

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUpdatedContentResponse =
  await shutterstock.editorialImages.listUpdatedContent({
    type: "edit",
    dateUpdatedStart: "1970-01-01T00:00:00.00Z",
    dateUpdatedEnd: "1970-01-01T00:00:00.00Z",
    sort: "newest",
    country: "country_example",
    perPage: 500,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'edit' | 'addition'`<a id="type-edit--addition"></a>

Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted

##### dateUpdatedStart: `string`<a id="dateupdatedstart-string"></a>

Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

##### dateUpdatedEnd: `string`<a id="dateupdatedend-string"></a>

Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

##### country: `string`<a id="country-string"></a>

Show only editorial content that is available for distribution in a certain country

##### dateTakenStart: `string | Date`<a id="datetakenstart-string--date"></a>

Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets

##### dateTakenEnd: `string | Date`<a id="datetakenend-string--date"></a>

Show images that were taken before the specified date

##### cursor: `string`<a id="cursor-string"></a>

The cursor of the page with which to start fetching results; this cursor is returned from previous requests

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort by

##### supplierCode: `string`[]<a id="suppliercode-string"></a>

Show only editorial content from certain suppliers

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[EditorialUpdatedResults](./models/editorial-updated-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/updated` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.listUpdatedContent_0`<a id="shutterstockeditorialimageslistupdatedcontent_0"></a>

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUpdatedContent_0Response =
  await shutterstock.editorialImages.listUpdatedContent_0({
    type: "edit",
    dateUpdatedStart: "1970-01-01T00:00:00.00Z",
    dateUpdatedEnd: "1970-01-01T00:00:00.00Z",
    sort: "newest",
    country: "country_example",
    perPage: 500,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'edit' | 'addition'`<a id="type-edit--addition"></a>

Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted

##### dateUpdatedStart: `string`<a id="dateupdatedstart-string"></a>

Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

##### dateUpdatedEnd: `string`<a id="dateupdatedend-string"></a>

Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.

##### country: `string`<a id="country-string"></a>

Show only editorial content that is available for distribution in a certain country

##### dateTakenStart: `string | Date`<a id="datetakenstart-string--date"></a>

Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets

##### dateTakenEnd: `string | Date`<a id="datetakenend-string--date"></a>

Show images that were taken before the specified date

##### cursor: `string`<a id="cursor-string"></a>

The cursor of the page with which to start fetching results; this cursor is returned from previous requests

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort by

##### supplierCode: `string`[]<a id="suppliercode-string"></a>

Show only editorial content from certain suppliers

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[EditorialUpdatedResults](./models/editorial-updated-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/updated` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.search`<a id="shutterstockeditorialimagessearch"></a>

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchResponse = await shutterstock.editorialImages.search({
  sort: "relevant",
  country: "country_example",
  perPage: 20,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Show only editorial content that is available for distribution in a certain country

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces

##### sort: `'relevant' | 'newest' | 'oldest'`<a id="sort-relevant--newest--oldest"></a>

Sort by

##### category: `string`<a id="category-string"></a>

Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list

##### supplierCode: `string`[]<a id="suppliercode-string"></a>

Show only editorial content from certain suppliers

##### dateStart: `string | Date`<a id="datestart-string--date"></a>

Show only editorial content generated on or after a specific date

##### dateEnd: `string | Date`<a id="dateend-string--date"></a>

Show only editorial content generated on or before a specific date

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### cursor: `string`<a id="cursor-string"></a>

The cursor of the page with which to start fetching results; this cursor is returned from previous requests

#### 🔄 Return<a id="🔄-return"></a>

[EditorialSearchResults](./models/editorial-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/images/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialImages.searchContent`<a id="shutterstockeditorialimagessearchcontent"></a>

Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchContentResponse = await shutterstock.editorialImages.searchContent({
  sort: "relevant",
  country: "country_example",
  perPage: 20,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Show only editorial content that is available for distribution in a certain country

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces

##### sort: `'relevant' | 'newest' | 'oldest'`<a id="sort-relevant--newest--oldest"></a>

Sort by

##### category: `string`<a id="category-string"></a>

Show editorial content within a certain editorial category; specify by category name

##### supplierCode: `string`[]<a id="suppliercode-string"></a>

Show only editorial content from certain suppliers

##### dateStart: `string | Date`<a id="datestart-string--date"></a>

Show only editorial content generated on or after a specific date

##### dateEnd: `string | Date`<a id="dateend-string--date"></a>

Show only editorial content generated on or before a specific date

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### cursor: `string`<a id="cursor-string"></a>

The cursor of the page with which to start fetching results; this cursor is returned from previous requests

#### 🔄 Return<a id="🔄-return"></a>

[EditorialSearchResults](./models/editorial-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialVideo.getContentDetails`<a id="shutterstockeditorialvideogetcontentdetails"></a>

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentDetailsResponse =
  await shutterstock.editorialVideo.getContentDetails({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Editorial ID

##### country: `string`<a id="country-string"></a>

Returns only if the content is available for distribution in a certain country

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[EditorialVideoContent](./models/editorial-video-content.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/videos/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialVideo.licenseVideos`<a id="shutterstockeditorialvideolicensevideos"></a>

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseVideosResponse = await shutterstock.editorialVideo.licenseVideos({
  country: null,
  editorial: [
    {
      editorial_id: "10679854a",
      license: "premier_editorial_video_digital_only",
      size: "original",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: [`ISOCountryCode`](./models/isocountry-code.ts)<a id="country-isocountrycodemodelsisocountry-codets"></a>

##### editorial: [`LicenseEditorialVideoContent`](./models/license-editorial-video-content.ts)[]<a id="editorial-licenseeditorialvideocontentmodelslicense-editorial-video-contentts"></a>

Editorial content to license

#### 🔄 Return<a id="🔄-return"></a>

[LicenseEditorialContentResults](./models/license-editorial-content-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/videos/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialVideo.listVideoCategories`<a id="shutterstockeditorialvideolistvideocategories"></a>

This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVideoCategoriesResponse =
  await shutterstock.editorialVideo.listVideoCategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[EditorialVideoCategoryResults](./models/editorial-video-category-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/videos/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialVideo.listVideoLicenses`<a id="shutterstockeditorialvideolistvideolicenses"></a>

This endpoint lists existing editorial video licenses.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVideoLicensesResponse =
  await shutterstock.editorialVideo.listVideoLicenses({
    page: 1,
    perPage: 20,
    sort: "newest",
    downloadAvailability: "all",
    teamHistory: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

Show licenses for the specified editorial video ID

##### license: `string`<a id="license-string"></a>

Show editorial videos that are available with the specified license name

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

##### username: `string`<a id="username-string"></a>

Filter licenses by username of licensee

##### startDate: `string`<a id="startdate-string"></a>

Show licenses created on or after the specified date

##### endDate: `string`<a id="enddate-string"></a>

Show licenses created before the specified date

##### downloadAvailability: `'all' | 'downloadable' | 'non_downloadable'`<a id="downloadavailability-all--downloadable--non_downloadable"></a>

Filter licenses by download availability

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

Set to true to see license history for all members of your team.

#### 🔄 Return<a id="🔄-return"></a>

[DownloadHistoryDataList](./models/download-history-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/videos/licenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.editorialVideo.searchVideoContent`<a id="shutterstockeditorialvideosearchvideocontent"></a>

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchVideoContentResponse =
  await shutterstock.editorialVideo.searchVideoContent({
    sort: "relevant",
    country: "country_example",
    resolution: "4k",
    perPage: 20,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Show only editorial video content that is available for distribution in a certain country

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces

##### sort: `'relevant' | 'newest' | 'oldest'`<a id="sort-relevant--newest--oldest"></a>

Sort by

##### category: `string`<a id="category-string"></a>

Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list

##### supplierCode: `string`[]<a id="suppliercode-string"></a>

Show only editorial video content from certain suppliers

##### dateStart: `string | Date`<a id="datestart-string--date"></a>

Show only editorial video content generated on or after a specific date

##### dateEnd: `string | Date`<a id="dateend-string--date"></a>

Show only editorial video content generated on or before a specific date

##### resolution: `'4k' | 'high_definition' | 'standard_definition'`<a id="resolution-4k--high_definition--standard_definition"></a>

Show only editorial video content with specific resolution

##### fps: `number`<a id="fps-number"></a>

Show only editorial video content generated with specific frames per second

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### cursor: `string`<a id="cursor-string"></a>

The cursor of the page with which to start fetching results; this cursor is returned from previous requests

#### 🔄 Return<a id="🔄-return"></a>

[EditorialVideoSearchResults](./models/editorial-video-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/editorial/videos/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.addToCollectionItems`<a id="shutterstockimagesaddtocollectionitems"></a>

This endpoint adds one or more images to a collection by image IDs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToCollectionItemsResponse =
  await shutterstock.images.addToCollectionItems({
    id: "id_example",
    items: [
      {
        added_time: "2020-05-29T17:10:22Z",
        id: "297886754",
        media_type: "image",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`CollectionItem`](./models/collection-item.ts)[]<a id="items-collectionitemmodelscollection-itemts"></a>

List of items

##### id: `string`<a id="id-string"></a>

Collection ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/{id}/items` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.createCollection`<a id="shutterstockimagescreatecollection"></a>

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCollectionResponse = await shutterstock.images.createCollection({
  name: "Test Collection 19cf",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionCreateResponse](./models/collection-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.deleteCollection`<a id="shutterstockimagesdeletecollection"></a>

This endpoint deletes an image collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCollectionResponse = await shutterstock.images.deleteCollection({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.extractKeywordsFromText`<a id="shutterstockimagesextractkeywordsfromtext"></a>

This endpoint returns up to 10 important keywords from a block of plain text.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const extractKeywordsFromTextResponse =
  await shutterstock.images.extractKeywordsFromText({
    text: "Planting flowers is a great way to make springtime more beautiful.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

Plain text to extract keywords from

#### 🔄 Return<a id="🔄-return"></a>

[SearchEntitiesResponse](./models/search-entities-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/search/suggestions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.featuredCollectionDetails`<a id="shutterstockimagesfeaturedcollectiondetails"></a>

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const featuredCollectionDetailsResponse =
  await shutterstock.images.featuredCollectionDetails({
    id: "id_example",
    embed: "share_url",
    assetHint: "1x",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### embed: `'share_url'`<a id="embed-share_url"></a>

Which sharing information to include in the response, such as a URL to the collection

##### assetHint: `'1x' | '2x'`<a id="assethint-1x--2x"></a>

Cover image size

#### 🔄 Return<a id="🔄-return"></a>

[FeaturedCollection](./models/featured-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/featured/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.getCollectionDetails`<a id="shutterstockimagesgetcollectiondetails"></a>

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionDetailsResponse =
  await shutterstock.images.getCollectionDetails({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### embed: `string`[]<a id="embed-string"></a>

Which sharing information to include in the response, such as a URL to the collection

##### shareCode: `string`<a id="sharecode-string"></a>

Code to retrieve a shared collection

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.getCollectionItems`<a id="shutterstockimagesgetcollectionitems"></a>

This endpoint lists the IDs of images in a featured collection and the date that each was added.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionItemsResponse = await shutterstock.images.getCollectionItems(
  {
    id: "id_example",
    page: 1,
    perPage: 100,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[CollectionItemDataList](./models/collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/featured/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.getCollectionItems_0`<a id="shutterstockimagesgetcollectionitems_0"></a>

This endpoint lists the IDs of images in a collection and the date that each was added.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionItems_0Response =
  await shutterstock.images.getCollectionItems_0({
    id: "id_example",
    page: 1,
    perPage: 100,
    sort: "oldest",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### shareCode: `string`<a id="sharecode-string"></a>

Code to retrieve the contents of a shared collection

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

#### 🔄 Return<a id="🔄-return"></a>

[CollectionItemDataList](./models/collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.getDetails`<a id="shutterstockimagesgetdetails"></a>

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await shutterstock.images.getDetails({
  id: "id_example",
  language: "cs",
  view: "full",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Image ID

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[Image](./models/image.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.getSearchSuggestions`<a id="shutterstockimagesgetsearchsuggestions"></a>

This endpoint provides autocomplete suggestions for partial search terms.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSearchSuggestionsResponse =
  await shutterstock.images.getSearchSuggestions({
    query: "query_example",
    limit: 10,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

Search term for which you want keyword suggestions

##### limit: `number`<a id="limit-number"></a>

Limit the number of suggestions

#### 🔄 Return<a id="🔄-return"></a>

[Suggestions](./models/suggestions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/search/suggestions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.licenseImagesForMultiple`<a id="shutterstockimageslicenseimagesformultiple"></a>

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseImagesForMultipleResponse =
  await shutterstock.images.licenseImagesForMultiple({
    format: "eps",
    size: "huge",
    images: [
      {
        editorial_acknowledgement: true,
        format: "jpg",
        image_id: "123456789",
        price: 12.34,
        show_modal: true,
        size: "small",
        subscription_id: "s12345678",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### images: [`LicenseImageRequestImagesInner`](./models/license-image-request-images-inner.ts)[]<a id="images-licenseimagerequestimagesinnermodelslicense-image-request-images-innerts"></a>

Images to create licenses for

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription ID to use to license the image

##### format: `'eps' | 'jpg'`<a id="format-eps--jpg"></a>

(Deprecated) Image format

##### size: `'small' | 'medium' | 'huge' | 'vector' | 'custom'`<a id="size-small--medium--huge--vector--custom"></a>

Image size

##### searchId: `string`<a id="searchid-string"></a>

Search ID that was provided in the results of an image search

#### 🔄 Return<a id="🔄-return"></a>

[LicenseImageResultDataList](./models/license-image-result-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listCategories`<a id="shutterstockimageslistcategories"></a>

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse = await shutterstock.images.listCategories({
  language: "cs",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

#### 🔄 Return<a id="🔄-return"></a>

[CategoryDataList](./models/category-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listCollections`<a id="shutterstockimageslistcollections"></a>

This endpoint lists your collections of images and their basic attributes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await shutterstock.images.listCollections({
  page: 1,
  perPage: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embed: `string`[]<a id="embed-string"></a>

Which sharing information to include in the response, such as a URL to the collection

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[CollectionDataList](./models/collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listFeaturedCollections`<a id="shutterstockimageslistfeaturedcollections"></a>

This endpoint lists featured collections of specific types and a name and cover image for each collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFeaturedCollectionsResponse =
  await shutterstock.images.listFeaturedCollections({
    embed: "share_url",
    assetHint: "1x",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embed: `'share_url'`<a id="embed-share_url"></a>

Which sharing information to include in the response, such as a URL to the collection

##### type: `string`[]<a id="type-string"></a>

The types of collections to return

##### assetHint: `'1x' | '2x'`<a id="assethint-1x--2x"></a>

Cover image size

#### 🔄 Return<a id="🔄-return"></a>

[FeaturedCollectionDataList](./models/featured-collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/featured` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listInfo`<a id="shutterstockimageslistinfo"></a>

This endpoint lists information about one or more images, including the available sizes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInfoResponse = await shutterstock.images.listInfo({
  id: ["id_example"],
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

One or more image IDs

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[ImageDataList](./models/image-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listLicenses`<a id="shutterstockimageslistlicenses"></a>

This endpoint lists existing licenses.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLicensesResponse = await shutterstock.images.listLicenses({
  page: 1,
  perPage: 20,
  sort: "newest",
  downloadAvailability: "all",
  teamHistory: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### imageId: `string`<a id="imageid-string"></a>

Show licenses for the specified image ID

##### license: `string`<a id="license-string"></a>

Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

##### username: `string`<a id="username-string"></a>

Filter licenses by username of licensee

##### startDate: `string`<a id="startdate-string"></a>

Show licenses created on or after the specified date

##### endDate: `string`<a id="enddate-string"></a>

Show licenses created before the specified date

##### downloadAvailability: `'all' | 'downloadable' | 'non_downloadable'`<a id="downloadavailability-all--downloadable--non_downloadable"></a>

Filter licenses by download availability

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

Set to true to see license history for all members of your team.

#### 🔄 Return<a id="🔄-return"></a>

[DownloadHistoryDataList](./models/download-history-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/licenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listRecommendedImages`<a id="shutterstockimageslistrecommendedimages"></a>

This endpoint returns images that customers put in the same collection as the specified image IDs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRecommendedImagesResponse =
  await shutterstock.images.listRecommendedImages({
    id: ["id_example"],
    maxItems: 20,
    safe: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

Image IDs

##### maxItems: `number`<a id="maxitems-number"></a>

Maximum number of results returned in the response

##### safe: `boolean`<a id="safe-boolean"></a>

Restrict results to safe images

#### 🔄 Return<a id="🔄-return"></a>

[RecommendationDataList](./models/recommendation-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/recommendations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listSimilarImages`<a id="shutterstockimageslistsimilarimages"></a>

This endpoint returns images that are visually similar to an image that you specify.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSimilarImagesResponse = await shutterstock.images.listSimilarImages({
  id: "Uu2LC4",
  language: "cs",
  page: 1,
  perPage: 20,
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Image ID

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

#### 🔄 Return<a id="🔄-return"></a>

[ImageSearchResults](./models/image-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/{id}/similar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.listUpdatedContent`<a id="shutterstockimageslistupdatedcontent"></a>

This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUpdatedContentResponse = await shutterstock.images.listUpdatedContent(
  {
    interval: "1 HOUR",
    page: 1,
    perPage: 100,
    sort: "newest",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`[]<a id="type-string"></a>

Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Show images updated on or after the specified date

##### endDate: `string | Date`<a id="enddate-string--date"></a>

Show images updated before the specified date

##### interval: `string`<a id="interval-string"></a>

Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

#### 🔄 Return<a id="🔄-return"></a>

[UpdatedMediaDataList](./models/updated-media-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/updated` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.redownloadLicense`<a id="shutterstockimagesredownloadlicense"></a>

This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redownloadLicenseResponse = await shutterstock.images.redownloadLicense({
  id: "id_example",
  size: "small",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

License ID

##### auth_cookie: [`Cookie`](./models/cookie.ts)<a id="auth_cookie-cookiemodelscookiets"></a>

##### show_modal: `boolean`<a id="show_modal-boolean"></a>

(Deprecated)

##### size: `string`<a id="size-string"></a>

Size of the image

##### verification_code: `string`<a id="verification_code-string"></a>

(Deprecated)

#### 🔄 Return<a id="🔄-return"></a>

[Url](./models/url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/licenses/{id}/downloads` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.removeFromCollection`<a id="shutterstockimagesremovefromcollection"></a>

This endpoint removes one or more images from a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromCollectionResponse =
  await shutterstock.images.removeFromCollection({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### itemId: `string`[]<a id="itemid-string"></a>

One or more image IDs to remove from the collection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/{id}/items` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.renameCollection`<a id="shutterstockimagesrenamecollection"></a>

This endpoint sets a new name for an image collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameCollectionResponse = await shutterstock.images.renameCollection({
  id: "id_example",
  name: "My collection with a new name",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The new name of the collection

##### id: `string`<a id="id-string"></a>

Collection ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/collections/{id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.runMultipleSearches`<a id="shutterstockimagesrunmultiplesearches"></a>

This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const runMultipleSearchesResponse =
  await shutterstock.images.runMultipleSearches({
    requestBody: ["#/components/schemas/BulkImageSearchRequest/example"],
    addedDate: "2021-03-29T00:00:00.000Z",
    addedDateStart: "2021-03-29T00:00:00.000Z",
    aspectRatioMin: 1.7778,
    aspectRatioMax: 1.7778,
    aspectRatio: 1.7778,
    addedDateEnd: "2021-03-29T00:00:00.000Z",
    category: "string_example",
    color: "4F21EA",
    contributor: ["123456"],
    contributorCountry: null,
    fields: "string_example",
    height: 1,
    heightFrom: 1080,
    heightTo: 1080,
    imageType: ["photo"],
    keywordSafeSearch: true,
    language: "fr",
    license: ["string_example"],
    model: ["12345", "67890"],
    orientation: "vertical",
    page: 1,
    perPage: 10,
    peopleModelReleased: true,
    peopleAge: "20s",
    peopleEthnicity: ["hispanic"],
    peopleGender: "both",
    peopleNumber: 2,
    region: "US",
    safe: true,
    sort: "popular",
    spellcheckQuery: true,
    view: "minimal",
    width: 1,
    widthFrom: 1920,
    widthTo: 1920,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### addedDate: `string | Date`<a id="addeddate-string--date"></a>

Show images added on the specified date

##### addedDateStart: `string | Date`<a id="addeddatestart-string--date"></a>

Show images added on or after the specified date

##### aspectRatioMin: `number`<a id="aspectratiomin-number"></a>

Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image

##### aspectRatioMax: `number`<a id="aspectratiomax-number"></a>

Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image

##### aspectRatio: `number`<a id="aspectratio-number"></a>

Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image

##### addedDateEnd: `string | Date`<a id="addeddateend-string--date"></a>

Show images added before the specified date

##### category: `string`<a id="category-string"></a>

Show images with the specified Shutterstock-defined category; specify a category name or ID

##### color: `string`<a id="color-string"></a>

Specify either a hexadecimal color in the format \'4F21EA\' or \'grayscale\'; the API returns images that use similar colors

##### contributor: `string`[]<a id="contributor-string"></a>

Show images with the specified contributor names or IDs, allows multiple

##### contributorCountry: [`ImagesRunMultipleSearchesContributorCountryParameter`](./models/images-run-multiple-searches-contributor-country-parameter.ts)<a id="contributorcountry-imagesrunmultiplesearchescontributorcountryparametermodelsimages-run-multiple-searches-contributor-country-parameterts"></a>

Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search

##### fields: `string`<a id="fields-string"></a>

Fields to display in the response; see the documentation for the fields parameter in the overview section

##### height: `number`<a id="height-number"></a>

(Deprecated; use height_from and height_to instead) Show images with the specified height

##### heightFrom: `number`<a id="heightfrom-number"></a>

Show images with the specified height or larger, in pixels

##### heightTo: `number`<a id="heightto-number"></a>

Show images with the specified height or smaller, in pixels

##### imageType: `string`[]<a id="imagetype-string"></a>

Show images of the specified type

##### keywordSafeSearch: `boolean`<a id="keywordsafesearch-boolean"></a>

Hide results with potentially unsafe keywords

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Set query and result language (uses Accept-Language header if not set)

##### license: `string`[]<a id="license-string"></a>

Show only images with the specified license

##### model: `string`[]<a id="model-string"></a>

Show image results with the specified model IDs

##### orientation: `'horizontal' | 'vertical'`<a id="orientation-horizontal--vertical"></a>

Show image results with horizontal or vertical orientation

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### peopleModelReleased: `boolean`<a id="peoplemodelreleased-boolean"></a>

Show images of people with a signed model release

##### peopleAge: `'infants' | 'children' | 'teenagers' | '20s' | '30s' | '40s' | '50s' | '60s' | 'older'`<a id="peopleage-infants--children--teenagers--20s--30s--40s--50s--60s--older"></a>

Show images that feature people of the specified age category

##### peopleEthnicity: `string`[]<a id="peopleethnicity-string"></a>

Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities

##### peopleGender: `'male' | 'female' | 'both'`<a id="peoplegender-male--female--both"></a>

Show images with people of the specified gender

##### peopleNumber: `number`<a id="peoplenumber-number"></a>

Show images with the specified number of people

##### region: [`ImagesRunMultipleSearchesRegionParameter`](./models/images-run-multiple-searches-region-parameter.ts)<a id="region-imagesrunmultiplesearchesregionparametermodelsimages-run-multiple-searches-region-parameterts"></a>

Raise or lower search result rankings based on the result\'s relevance to a specified region; you can provide a country code or an IP address from which the API infers a country

##### safe: `boolean`<a id="safe-boolean"></a>

Enable or disable safe search

##### sort: `'newest' | 'popular' | 'relevance' | 'random'`<a id="sort-newest--popular--relevance--random"></a>

Sort by

##### spellcheckQuery: `boolean`<a id="spellcheckquery-boolean"></a>

Spellcheck the search query and return results on suggested spellings

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### width: `number`<a id="width-number"></a>

(Deprecated; use width_from and width_to instead) Show images with the specified width

##### widthFrom: `number`<a id="widthfrom-number"></a>

Show images with the specified width or larger, in pixels

##### widthTo: `number`<a id="widthto-number"></a>

Show images with the specified width or smaller, in pixels

##### requestBody: [`SearchImage`](./models/search-image.ts)[]<a id="requestbody-searchimagemodelssearch-imagets"></a>

List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters

#### 🔄 Return<a id="🔄-return"></a>

[BulkImageSearchResults](./models/bulk-image-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/bulk_search/images` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.images.searchImages`<a id="shutterstockimagessearchimages"></a>

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchImagesResponse = await shutterstock.images.searchImages({
  aiLabelsLimit: 20,
  aiIndustry: "automotive",
  aiObjective: "awareness",
  keywordSafeSearch: true,
  language: "cs",
  orientation: "horizontal",
  page: 1,
  perPage: 20,
  peopleAge: "infants",
  peopleGender: "male",
  safe: true,
  sort: "popular",
  spellcheckQuery: true,
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### addedDate: `string | Date`<a id="addeddate-string--date"></a>

Show images added on the specified date

##### addedDateStart: `string | Date`<a id="addeddatestart-string--date"></a>

Show images added on or after the specified date

##### aspectRatioMin: `number`<a id="aspectratiomin-number"></a>

Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image

##### aspectRatioMax: `number`<a id="aspectratiomax-number"></a>

Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image

##### aspectRatio: `number`<a id="aspectratio-number"></a>

Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image

##### aiSearch: `boolean`<a id="aisearch-boolean"></a>

Set to true and specify the `ai_objective` and `ai_industry` parameters to use AI-powered search; the API returns information about how well images meet the objective for the industry 

##### aiLabelsLimit: `number`<a id="ailabelslimit-number"></a>

For AI-powered search, specify the maximum number of labels to return

##### aiIndustry: `'automotive' | 'cpg' | 'finance' | 'healthcare' | 'retail' | 'technology'`<a id="aiindustry-automotive--cpg--finance--healthcare--retail--technology"></a>

For AI-powered search, specify the industry to target; requires that the `ai_search` parameter is set to true

##### aiObjective: `'awareness' | 'traffic' | 'conversions'`<a id="aiobjective-awareness--traffic--conversions"></a>

For AI-powered search, specify the goal of the media; requires that the `ai_search` parameter is set to true

##### addedDateEnd: `string | Date`<a id="addeddateend-string--date"></a>

Show images added before the specified date

##### category: `string`<a id="category-string"></a>

Show images with the specified Shutterstock-defined category; specify a category name or ID

##### color: `string`<a id="color-string"></a>

Specify either a hexadecimal color in the format \'4F21EA\' or \'grayscale\'; the API returns images that use similar colors

##### contributor: `string`[]<a id="contributor-string"></a>

Show images with the specified contributor names or IDs, allows multiple

##### contributorCountry: [`ImagesRunMultipleSearchesContributorCountryParameter`](./models/images-run-multiple-searches-contributor-country-parameter.ts)<a id="contributorcountry-imagesrunmultiplesearchescontributorcountryparametermodelsimages-run-multiple-searches-contributor-country-parameterts"></a>

Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search

##### fields: `string`<a id="fields-string"></a>

Fields to display in the response; see the documentation for the fields parameter in the overview section

##### height: `number`<a id="height-number"></a>

(Deprecated; use height_from and height_to instead) Show images with the specified height

##### heightFrom: `number`<a id="heightfrom-number"></a>

Show images with the specified height or larger, in pixels

##### heightTo: `number`<a id="heightto-number"></a>

Show images with the specified height or smaller, in pixels

##### imageType: `string`[]<a id="imagetype-string"></a>

Show images of the specified type

##### keywordSafeSearch: `boolean`<a id="keywordsafesearch-boolean"></a>

Hide results with potentially unsafe keywords

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Set query and result language (uses Accept-Language header if not set)

##### license: `string`[]<a id="license-string"></a>

Show only images with the specified license

##### model: `string`[]<a id="model-string"></a>

Show image results with the specified model IDs

##### orientation: `'horizontal' | 'vertical'`<a id="orientation-horizontal--vertical"></a>

Show image results with horizontal or vertical orientation

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### peopleModelReleased: `boolean`<a id="peoplemodelreleased-boolean"></a>

Show images of people with a signed model release

##### peopleAge: `'infants' | 'children' | 'teenagers' | '20s' | '30s' | '40s' | '50s' | '60s' | 'older'`<a id="peopleage-infants--children--teenagers--20s--30s--40s--50s--60s--older"></a>

Show images that feature people of the specified age category

##### peopleEthnicity: `string`[]<a id="peopleethnicity-string"></a>

Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities

##### peopleGender: `'male' | 'female' | 'both'`<a id="peoplegender-male--female--both"></a>

Show images with people of the specified gender

##### peopleNumber: `number`<a id="peoplenumber-number"></a>

Show images with the specified number of people

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces; you can use NOT to filter out images that match a term

##### region: [`ImagesRunMultipleSearchesRegionParameter`](./models/images-run-multiple-searches-region-parameter.ts)<a id="region-imagesrunmultiplesearchesregionparametermodelsimages-run-multiple-searches-region-parameterts"></a>

Raise or lower search result rankings based on the result\'s relevance to a specified region; you can provide a country code or an IP address from which the API infers a country

##### safe: `boolean`<a id="safe-boolean"></a>

Enable or disable safe search

##### sort: `'newest' | 'popular' | 'relevance' | 'random'`<a id="sort-newest--popular--relevance--random"></a>

Sort by

##### spellcheckQuery: `boolean`<a id="spellcheckquery-boolean"></a>

Spellcheck the search query and return results on suggested spellings

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### width: `number`<a id="width-number"></a>

(Deprecated; use width_from and width_to instead) Show images with the specified width

##### widthFrom: `number`<a id="widthfrom-number"></a>

Show images with the specified width or larger, in pixels

##### widthTo: `number`<a id="widthto-number"></a>

Show images with the specified width or smaller, in pixels

#### 🔄 Return<a id="🔄-return"></a>

[ImageSearchResults](./models/image-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/images/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.oauth.authorizeApplications`<a id="shutterstockoauthauthorizeapplications"></a>

This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeApplicationsResponse =
  await shutterstock.oauth.authorizeApplications({
    clientId: "clientId_example",
    realm: "customer",
    redirectUri: "redirectUri_example",
    responseType: "code",
    scope: "user.view",
    state: "state_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

Client ID (Consumer Key) of your application

##### redirectUri: `string`<a id="redirecturi-string"></a>

The callback URI to send the request to after authorization; must use a host name that is registered with your application

##### responseType: `'code'`<a id="responsetype-code"></a>

Type of temporary authorization code that will be used to generate an access code; the only valid value is \'code\'

##### state: `string`<a id="state-string"></a>

Unique value used by the calling app to verify the request

##### realm: `'customer' | 'contributor'`<a id="realm-customer--contributor"></a>

User type to be authorized (usually \'customer\')

##### scope: `string`<a id="scope-string"></a>

Space-separated list of scopes to be authorized

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/oauth/authorize` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.oauth.getUserAccessToken`<a id="shutterstockoauthgetuseraccesstoken"></a>

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserAccessTokenResponse = await shutterstock.oauth.getUserAccessToken({
  client_id: "client_id_example",
  expires: false,
  grant_type: "authorization_code",
  realm: "customer",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### client_id: `string`<a id="client_id-string"></a>

Client ID (Consumer Key) of your application

##### grant_type: `string`<a id="grant_type-string"></a>

Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants

##### client_secret: `string`<a id="client_secret-string"></a>

Client Secret (Consumer Secret) of your application

##### code: `string`<a id="code-string"></a>

Response code from the /oauth/authorize flow; required if grant_type=authorization_code

##### expires: `boolean`<a id="expires-boolean"></a>

Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token

##### realm: `string`<a id="realm-string"></a>

User type to be authorized (usually \\\'customer\\\')

##### refresh_token: `string`<a id="refresh_token-string"></a>

Pass this along with grant_type=refresh_token to get a fresh access token

#### 🔄 Return<a id="🔄-return"></a>

[OauthAccessTokenResponse](./models/oauth-access-token-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/oauth/access_token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.soundEffects.getDetails`<a id="shutterstocksoundeffectsgetdetails"></a>

This endpoint shows information about a sound effect.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await shutterstock.soundEffects.getDetails({
  id: 1,
  language: "cs",
  view: "minimal",
  library: "shutterstock",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Audio track ID

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### library: `'shutterstock' | 'premier' | 'premiumbeat'`<a id="library-shutterstock--premier--premiumbeat"></a>

Which library to fetch from

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[SFX](./models/sfx.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/sfx/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.soundEffects.licenseAssets`<a id="shutterstocksoundeffectslicenseassets"></a>

This endpoint licenses sounds effect assets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseAssetsResponse = await shutterstock.soundEffects.licenseAssets({
  sound_effects: [
    {
      audio_layout: "ambisonic",
      format: "wav",
      sfx_id: "123456789",
      subscription_id: "s12345678",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sound_effects: [`LicenseSFX`](./models/license-sfx.ts)[]<a id="sound_effects-licensesfxmodelslicense-sfxts"></a>

Sound effects to license for

#### 🔄 Return<a id="🔄-return"></a>

[LicenseSFXResultDataList](./models/license-sfxresult-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/sfx/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.soundEffects.listDetails`<a id="shutterstocksoundeffectslistdetails"></a>

This endpoint shows information about sound effects.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDetailsResponse = await shutterstock.soundEffects.listDetails({
  id: ["id_example"],
  view: "minimal",
  language: "cs",
  library: "shutterstock",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

One or more sound effect IDs

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### library: `'shutterstock' | 'premier' | 'premiumbeat'`<a id="library-shutterstock--premier--premiumbeat"></a>

Which library to fetch from

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[SFXDataList](./models/sfxdata-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/sfx` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.soundEffects.listLicenses`<a id="shutterstocksoundeffectslistlicenses"></a>

This endpoint lists existing licenses.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLicensesResponse = await shutterstock.soundEffects.listLicenses({
  page: 1,
  perPage: 20,
  sort: "newest",
  downloadAvailability: "all",
  teamHistory: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sfxId: `string`<a id="sfxid-string"></a>

Show licenses for the specified sound effects ID

##### license: `string`<a id="license-string"></a>

Show sound effects that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

##### username: `string`<a id="username-string"></a>

Filter licenses by username of licensee

##### startDate: `string`<a id="startdate-string"></a>

Show licenses created on or after the specified date

##### endDate: `string`<a id="enddate-string"></a>

Show licenses created before the specified date

##### licenseId: `string`<a id="licenseid-string"></a>

Filter by the license ID

##### downloadAvailability: `'all' | 'downloadable' | 'non_downloadable'`<a id="downloadavailability-all--downloadable--non_downloadable"></a>

Filter licenses by download availability

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

Set to true to see license history for all members of your team.

#### 🔄 Return<a id="🔄-return"></a>

[DownloadHistoryDataList](./models/download-history-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/sfx/licenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.soundEffects.redownloadLicenses`<a id="shutterstocksoundeffectsredownloadlicenses"></a>

This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redownloadLicensesResponse =
  await shutterstock.soundEffects.redownloadLicenses({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

License ID

#### 🔄 Return<a id="🔄-return"></a>

[SfxUrl](./models/sfx-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/sfx/licenses/{id}/downloads` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.soundEffects.searchSoundEffects`<a id="shutterstocksoundeffectssearchsoundeffects"></a>

This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchSoundEffectsResponse =
  await shutterstock.soundEffects.searchSoundEffects({
    page: 1,
    perPage: 20,
    safe: true,
    sort: "popular",
    view: "minimal",
    language: "cs",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### addedDate: `string | Date`<a id="addeddate-string--date"></a>

Show sound effects added on the specified date

##### addedDateStart: `string | Date`<a id="addeddatestart-string--date"></a>

Show sound effects added on or after the specified date

##### addedDateEnd: `string | Date`<a id="addeddateend-string--date"></a>

Show sound effects added before the specified date

##### duration: `number`<a id="duration-number"></a>

Show sound effects with the specified duration in seconds

##### durationFrom: `number`<a id="durationfrom-number"></a>

Show sound effects with the specified duration or longer in seconds

##### durationTo: `number`<a id="durationto-number"></a>

Show sound effects with the specified duration or shorter in seconds

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces

##### safe: `boolean`<a id="safe-boolean"></a>

Enable or disable safe search

##### sort: `'popular' | 'newest' | 'relevance' | 'random' | 'oldest'`<a id="sort-popular--newest--relevance--random--oldest"></a>

Sort by

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Set query and result language (uses Accept-Language header if not set)

#### 🔄 Return<a id="🔄-return"></a>

[SFXSearchResults](./models/sfxsearch-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/sfx/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.test.echoText`<a id="shutterstocktestechotext"></a>

Echo text

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const echoTextResponse = await shutterstock.test.echoText({
  text: "ok",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

Text to echo

#### 🔄 Return<a id="🔄-return"></a>

[TestEcho](./models/test-echo.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/test` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.test.inputValidation`<a id="shutterstocktestinputvalidation"></a>

Validate input

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inputValidationResponse = await shutterstock.test.inputValidation({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Integer ID

##### tag: `string`[]<a id="tag-string"></a>

List of tags

##### userAgent: `string`<a id="useragent-string"></a>

User agent

#### 🔄 Return<a id="🔄-return"></a>

[TestValidate](./models/test-validate.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/test/validate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.users.getAccessTokenDetails`<a id="shutterstockusersgetaccesstokendetails"></a>

Get access token details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccessTokenDetailsResponse =
  await shutterstock.users.getAccessTokenDetails();
```

#### 🔄 Return<a id="🔄-return"></a>

[AccessTokenDetails](./models/access-token-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/user/access_token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.users.getUserDetails`<a id="shutterstockusersgetuserdetails"></a>

Get user details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserDetailsResponse = await shutterstock.users.getUserDetails();
```

#### 🔄 Return<a id="🔄-return"></a>

[UserDetails](./models/user-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/user` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.users.listSubscriptions`<a id="shutterstockuserslistsubscriptions"></a>

List user subscriptions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSubscriptionsResponse = await shutterstock.users.listSubscriptions();
```

#### 🔄 Return<a id="🔄-return"></a>

[SubscriptionDataList](./models/subscription-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/user/subscriptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.addToCollectionItems`<a id="shutterstockvideosaddtocollectionitems"></a>

This endpoint adds one or more videos to a collection by video IDs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addToCollectionItemsResponse =
  await shutterstock.videos.addToCollectionItems({
    id: "id_example",
    items: [
      {
        added_time: "2020-05-29T17:10:22Z",
        id: "297886754",
        media_type: "image",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`CollectionItem`](./models/collection-item.ts)[]<a id="items-collectionitemmodelscollection-itemts"></a>

List of items

##### id: `string`<a id="id-string"></a>

The ID of the collection to which items should be added

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/{id}/items` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.collectionDetailsGet`<a id="shutterstockvideoscollectiondetailsget"></a>

This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const collectionDetailsGetResponse =
  await shutterstock.videos.collectionDetailsGet({
    id: "id_example",
    embed: "share_url",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### embed: `'share_url'`<a id="embed-share_url"></a>

What information to include in the response, such as a URL to the collection

#### 🔄 Return<a id="🔄-return"></a>

[FeaturedCollection](./models/featured-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/featured/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.collectionDetailsGet_0`<a id="shutterstockvideoscollectiondetailsget_0"></a>

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const collectionDetailsGet_0Response =
  await shutterstock.videos.collectionDetailsGet_0({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the collection to return

##### embed: `string`[]<a id="embed-string"></a>

Which sharing information to include in the response, such as a URL to the collection

##### shareCode: `string`<a id="sharecode-string"></a>

Code to retrieve a shared collection

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.createVideoCollections`<a id="shutterstockvideoscreatevideocollections"></a>

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVideoCollectionsResponse =
  await shutterstock.videos.createVideoCollections({
    name: "Test Collection 19cf",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionCreateResponse](./models/collection-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.deleteCollection`<a id="shutterstockvideosdeletecollection"></a>

This endpoint deletes a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCollectionResponse = await shutterstock.videos.deleteCollection({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the collection to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.findSimilar`<a id="shutterstockvideosfindsimilar"></a>

This endpoint searches for videos that are similar to a video that you specify.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findSimilarResponse = await shutterstock.videos.findSimilar({
  id: "id_example",
  language: "cs",
  page: 1,
  perPage: 20,
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of a video for which similar videos should be returned

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

#### 🔄 Return<a id="🔄-return"></a>

[VideoSearchResults](./models/video-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/{id}/similar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.getCollectionItems`<a id="shutterstockvideosgetcollectionitems"></a>

This endpoint lists the IDs of videos in a collection and the date that each was added.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionItemsResponse = await shutterstock.videos.getCollectionItems(
  {
    id: "id_example",
    page: 1,
    perPage: 100,
    sort: "oldest",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### shareCode: `string`<a id="sharecode-string"></a>

Code to retrieve the contents of a shared collection

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort order

#### 🔄 Return<a id="🔄-return"></a>

[CollectionItemDataList](./models/collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.getFeaturedCollectionItems`<a id="shutterstockvideosgetfeaturedcollectionitems"></a>

This endpoint lists the IDs of videos in a featured collection and the date that each was added.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFeaturedCollectionItemsResponse =
  await shutterstock.videos.getFeaturedCollectionItems({
    id: "id_example",
    page: 1,
    perPage: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Collection ID

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[VideoCollectionItemDataList](./models/video-collection-item-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/featured/{id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.licenseVideos`<a id="shutterstockvideoslicensevideos"></a>

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const licenseVideosResponse = await shutterstock.videos.licenseVideos({
  size: "web",
  videos: [
    {
      size: "hd",
      subscription_id: "s12345678",
      video_id: "2140697",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videos: [`LicenseVideo`](./models/license-video.ts)[]<a id="videos-licensevideomodelslicense-videots"></a>

Videos to license

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

The subscription ID to use for licensing

##### size: `'web' | 'sd' | 'hd' | '4k'`<a id="size-web--sd--hd--4k"></a>

The size of the video to license

##### searchId: `string`<a id="searchid-string"></a>

The Search ID that led to this licensing event

#### 🔄 Return<a id="🔄-return"></a>

[LicenseVideoResultDataList](./models/license-video-result-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/licenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.listCategories`<a id="shutterstockvideoslistcategories"></a>

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse = await shutterstock.videos.listCategories({
  language: "cs",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

#### 🔄 Return<a id="🔄-return"></a>

[CategoryDataList](./models/category-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.listCollections`<a id="shutterstockvideoslistcollections"></a>

This endpoint lists your collections of videos and their basic attributes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await shutterstock.videos.listCollections({
  page: 1,
  perPage: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### embed: `string`[]<a id="embed-string"></a>

Which sharing information to include in the response, such as a URL to the collection

#### 🔄 Return<a id="🔄-return"></a>

[CollectionDataList](./models/collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.listFeaturedVideoCollections`<a id="shutterstockvideoslistfeaturedvideocollections"></a>

This endpoint lists featured video collections and a name and cover video for each collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFeaturedVideoCollectionsResponse =
  await shutterstock.videos.listFeaturedVideoCollections({
    embed: "share_url",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embed: `'share_url'`<a id="embed-share_url"></a>

What information to include in the response, such as a URL to the collection

#### 🔄 Return<a id="🔄-return"></a>

[FeaturedCollectionDataList](./models/featured-collection-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/featured` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.listLicenses`<a id="shutterstockvideoslistlicenses"></a>

This endpoint lists existing licenses.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLicensesResponse = await shutterstock.videos.listLicenses({
  page: 1,
  perPage: 20,
  sort: "newest",
  downloadAvailability: "all",
  teamHistory: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### videoId: `string`<a id="videoid-string"></a>

Show licenses for the specified video ID

##### license: `string`<a id="license-string"></a>

Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort by oldest or newest videos first

##### username: `string`<a id="username-string"></a>

Filter licenses by username of licensee

##### startDate: `string`<a id="startdate-string"></a>

Show licenses created on or after the specified date

##### endDate: `string`<a id="enddate-string"></a>

Show licenses created before the specified date

##### downloadAvailability: `'all' | 'downloadable' | 'non_downloadable'`<a id="downloadavailability-all--downloadable--non_downloadable"></a>

Filter licenses by download availability

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

Set to true to see license history for all members of your team.

#### 🔄 Return<a id="🔄-return"></a>

[DownloadHistoryDataList](./models/download-history-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/licenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.listUpdatedVideos`<a id="shutterstockvideoslistupdatedvideos"></a>

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUpdatedVideosResponse = await shutterstock.videos.listUpdatedVideos({
  interval: "1 HOUR",
  page: 1,
  perPage: 100,
  sort: "newest",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string | Date`<a id="startdate-string--date"></a>

Show videos updated on or after the specified date

##### endDate: `string | Date`<a id="enddate-string--date"></a>

Show videos updated before the specified date

##### interval: `string`<a id="interval-string"></a>

Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### sort: `'newest' | 'oldest'`<a id="sort-newest--oldest"></a>

Sort by oldest or newest videos first

#### 🔄 Return<a id="🔄-return"></a>

[UpdatedMediaDataList](./models/updated-media-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/updated` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.listVideo`<a id="shutterstockvideoslistvideo"></a>

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVideoResponse = await shutterstock.videos.listVideo({
  id: ["id_example"],
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

One or more video IDs

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[VideoDataList](./models/video-data-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.redownloadDownloads`<a id="shutterstockvideosredownloaddownloads"></a>

This endpoint redownloads videos that you have already received a license for.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redownloadDownloadsResponse =
  await shutterstock.videos.redownloadDownloads({
    id: "id_example",
    size: "web",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The license ID of the item to (re)download. The download links in the response are valid for 8 hours.

##### auth_cookie: [`Cookie`](./models/cookie.ts)<a id="auth_cookie-cookiemodelscookiets"></a>

##### show_modal: `boolean`<a id="show_modal-boolean"></a>

(Deprecated)

##### size: `string`<a id="size-string"></a>

Size of the video

##### verification_code: `string`<a id="verification_code-string"></a>

(Deprecated)

#### 🔄 Return<a id="🔄-return"></a>

[Url](./models/url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/licenses/{id}/downloads` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.removeFromCollection`<a id="shutterstockvideosremovefromcollection"></a>

This endpoint removes one or more videos from a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromCollectionResponse =
  await shutterstock.videos.removeFromCollection({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Collection from which items will be deleted

##### itemId: `string`[]<a id="itemid-string"></a>

One or more video IDs to remove from the collection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/{id}/items` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.searchSuggestions`<a id="shutterstockvideossearchsuggestions"></a>

This endpoint provides autocomplete suggestions for partial search terms.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchSuggestionsResponse = await shutterstock.videos.searchSuggestions({
  query: "query_example",
  limit: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

Search term for which you want keyword suggestions

##### limit: `number`<a id="limit-number"></a>

Limit the number of the suggestions

#### 🔄 Return<a id="🔄-return"></a>

[Suggestions](./models/suggestions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/search/suggestions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.searchVideo`<a id="shutterstockvideossearchvideo"></a>

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchVideoResponse = await shutterstock.videos.searchVideo({
  aspectRatio: "43",
  keywordSafeSearch: true,
  language: "cs",
  page: 1,
  perPage: 20,
  peopleAge: "infants",
  peopleGender: "male",
  resolution: "4k",
  safe: true,
  sort: "popular",
  view: "minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### addedDate: `string | Date`<a id="addeddate-string--date"></a>

Show videos added on the specified date

##### addedDateStart: `string | Date`<a id="addeddatestart-string--date"></a>

Show videos added on or after the specified date

##### addedDateEnd: `string | Date`<a id="addeddateend-string--date"></a>

Show videos added before the specified date

##### aspectRatio: `'43' | '169' | 'nonstandard'`<a id="aspectratio-43--169--nonstandard"></a>

Show videos with the specified aspect ratio

##### category: `string`<a id="category-string"></a>

Show videos with the specified Shutterstock-defined category; specify a category name or ID

##### contributor: `string`[]<a id="contributor-string"></a>

Show videos with the specified artist names or IDs

##### contributorCountry: `string`[]<a id="contributorcountry-string"></a>

Show videos from contributors in one or more specified countries

##### duration: `number`<a id="duration-number"></a>

(Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds

##### durationFrom: `number`<a id="durationfrom-number"></a>

Show videos with the specified duration or longer in seconds

##### durationTo: `number`<a id="durationto-number"></a>

Show videos with the specified duration or shorter in seconds

##### fps: `number`<a id="fps-number"></a>

(Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second

##### fpsFrom: `number`<a id="fpsfrom-number"></a>

Show videos with the specified frames per second or more

##### fpsTo: `number`<a id="fpsto-number"></a>

Show videos with the specified frames per second or fewer

##### keywordSafeSearch: `boolean`<a id="keywordsafesearch-boolean"></a>

Hide results with potentially unsafe keywords

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Set query and result language (uses Accept-Language header if not set)

##### license: `string`[]<a id="license-string"></a>

Show only videos with the specified license or licenses

##### model: `string`[]<a id="model-string"></a>

Show videos with each of the specified models

##### page: `number`<a id="page-number"></a>

Page number

##### perPage: `number`<a id="perpage-number"></a>

Number of results per page

##### peopleAge: `'infants' | 'children' | 'teenagers' | '20s' | '30s' | '40s' | '50s' | '60s' | 'older'`<a id="peopleage-infants--children--teenagers--20s--30s--40s--50s--60s--older"></a>

Show videos that feature people of the specified age range

##### peopleEthnicity: `string`[]<a id="peopleethnicity-string"></a>

Show videos with people of the specified ethnicities

##### peopleGender: `'male' | 'female' | 'both'`<a id="peoplegender-male--female--both"></a>

Show videos with people with the specified gender

##### peopleNumber: `number`<a id="peoplenumber-number"></a>

Show videos with the specified number of people

##### peopleModelReleased: `boolean`<a id="peoplemodelreleased-boolean"></a>

Show only videos of people with a signed model release

##### query: `string`<a id="query-string"></a>

One or more search terms separated by spaces; you can use NOT to filter out videos that match a term

##### resolution: `'4k' | 'standard_definition' | 'high_definition'`<a id="resolution-4k--standard_definition--high_definition"></a>

Show videos with the specified resolution

##### safe: `boolean`<a id="safe-boolean"></a>

Enable or disable safe search

##### sort: `'newest' | 'popular' | 'relevance' | 'random'`<a id="sort-newest--popular--relevance--random"></a>

Sort by one of these categories

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

#### 🔄 Return<a id="🔄-return"></a>

[VideoSearchResults](./models/video-search-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.setNewName`<a id="shutterstockvideossetnewname"></a>

This endpoint sets a new name for a collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setNewNameResponse = await shutterstock.videos.setNewName({
  id: "id_example",
  name: "My collection with a new name",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The new name of the collection

##### id: `string`<a id="id-string"></a>

The ID of the collection to rename

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/collections/{id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `shutterstock.videos.videoDetails`<a id="shutterstockvideosvideodetails"></a>

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const videoDetailsResponse = await shutterstock.videos.videoDetails({
  id: "id_example",
  language: "cs",
  view: "full",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Video ID

##### language: [`Language`](./models/language.ts)<a id="language-languagemodelslanguagets"></a>

Language for the keywords and categories in the response

##### view: `'minimal' | 'full'`<a id="view-minimal--full"></a>

Amount of detail to render in the response

##### searchId: `string`<a id="searchid-string"></a>

The ID of the search that is related to this request

#### 🔄 Return<a id="🔄-return"></a>

[Video](./models/video.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/videos/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

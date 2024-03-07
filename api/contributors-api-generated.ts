/* tslint:disable */
/* eslint-disable */
/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Collection } from '../models';
// @ts-ignore
import { CollectionDataList } from '../models';
// @ts-ignore
import { CollectionItemDataList } from '../models';
// @ts-ignore
import { ContributorProfile } from '../models';
// @ts-ignore
import { ContributorProfileDataList } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ContributorsApi - axios parameter creator
 * @export
 */
export const ContributorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint gets more detailed information about a contributor\'s collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
         * @summary Get details about contributors\' collections
         * @param {string} contributorId Contributor ID
         * @param {string} id Collection ID that belongs to the contributor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionDetails: async (contributorId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contributorId' is not null or undefined
            assertParamExists('getCollectionDetails', 'contributorId', contributorId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCollectionDetails', 'id', id)
            const localVarPath = `/v2/contributors/{contributor_id}/collections/{id}`
                .replace(`{${"contributor_id"}}`, encodeURIComponent(String(contributorId !== undefined ? contributorId : `-contributor_id-`)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication customer_accessCode required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "customer_accessCode", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/contributors/{contributor_id}/collections/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint lists the IDs of items in a contributor\'s collection and the date that each was added.
         * @summary Get the items in contributors\' collections
         * @param {string} contributorId Contributor ID
         * @param {string} id Collection ID that belongs to the contributor
         * @param {number} [page] Page number
         * @param {number} [perPage] Number of results per page
         * @param {'newest' | 'oldest'} [sort] Sort order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionItems: async (contributorId: string, id: string, page?: number, perPage?: number, sort?: 'newest' | 'oldest', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contributorId' is not null or undefined
            assertParamExists('getCollectionItems', 'contributorId', contributorId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCollectionItems', 'id', id)
            const localVarPath = `/v2/contributors/{contributor_id}/collections/{id}/items`
                .replace(`{${"contributor_id"}}`, encodeURIComponent(String(contributorId !== undefined ? contributorId : `-contributor_id-`)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication customer_accessCode required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "customer_accessCode", [], configuration)
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/contributors/{contributor_id}/collections/{id}/items',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
         * @summary Get details about a single contributor
         * @param {string} contributorId Contributor ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (contributorId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contributorId' is not null or undefined
            assertParamExists('getDetails', 'contributorId', contributorId)
            const localVarPath = `/v2/contributors/{contributor_id}`
                .replace(`{${"contributor_id"}}`, encodeURIComponent(String(contributorId !== undefined ? contributorId : `-contributor_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication customer_accessCode required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "customer_accessCode", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/contributors/{contributor_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
         * @summary Get details about multiple contributors
         * @param {Array<string>} id One or more contributor IDs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailsMultiple: async (id: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDetailsMultiple', 'id', id)
            const localVarPath = `/v2/contributors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication customer_accessCode required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "customer_accessCode", [], configuration)
            if (id) {
                localVarQueryParameter['id'] = id;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/contributors',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint lists collections based on contributor ID.
         * @summary List contributors\' collections
         * @param {string} contributorId Contributor ID
         * @param {'newest' | 'last_updated' | 'item_count'} [sort] Sort order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollections: async (contributorId: string, sort?: 'newest' | 'last_updated' | 'item_count', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contributorId' is not null or undefined
            assertParamExists('listCollections', 'contributorId', contributorId)
            const localVarPath = `/v2/contributors/{contributor_id}/collections`
                .replace(`{${"contributor_id"}}`, encodeURIComponent(String(contributorId !== undefined ? contributorId : `-contributor_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication customer_accessCode required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "customer_accessCode", [], configuration)
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/contributors/{contributor_id}/collections',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContributorsApi - functional programming interface
 * @export
 */
export const ContributorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContributorsApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint gets more detailed information about a contributor\'s collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
         * @summary Get details about contributors\' collections
         * @param {ContributorsApiGetCollectionDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCollectionDetails(requestParameters: ContributorsApiGetCollectionDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollectionDetails(requestParameters.contributorId, requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint lists the IDs of items in a contributor\'s collection and the date that each was added.
         * @summary Get the items in contributors\' collections
         * @param {ContributorsApiGetCollectionItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCollectionItems(requestParameters: ContributorsApiGetCollectionItemsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CollectionItemDataList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollectionItems(requestParameters.contributorId, requestParameters.id, requestParameters.page, requestParameters.perPage, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
         * @summary Get details about a single contributor
         * @param {ContributorsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: ContributorsApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContributorProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.contributorId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
         * @summary Get details about multiple contributors
         * @param {ContributorsApiGetDetailsMultipleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetailsMultiple(requestParameters: ContributorsApiGetDetailsMultipleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContributorProfileDataList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetailsMultiple(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint lists collections based on contributor ID.
         * @summary List contributors\' collections
         * @param {ContributorsApiListCollectionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCollections(requestParameters: ContributorsApiListCollectionsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CollectionDataList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCollections(requestParameters.contributorId, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContributorsApi - factory interface
 * @export
 */
export const ContributorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContributorsApiFp(configuration)
    return {
        /**
         * This endpoint gets more detailed information about a contributor\'s collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
         * @summary Get details about contributors\' collections
         * @param {ContributorsApiGetCollectionDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionDetails(requestParameters: ContributorsApiGetCollectionDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Collection> {
            return localVarFp.getCollectionDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint lists the IDs of items in a contributor\'s collection and the date that each was added.
         * @summary Get the items in contributors\' collections
         * @param {ContributorsApiGetCollectionItemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollectionItems(requestParameters: ContributorsApiGetCollectionItemsRequest, options?: AxiosRequestConfig): AxiosPromise<CollectionItemDataList> {
            return localVarFp.getCollectionItems(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
         * @summary Get details about a single contributor
         * @param {ContributorsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: ContributorsApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<ContributorProfile> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
         * @summary Get details about multiple contributors
         * @param {ContributorsApiGetDetailsMultipleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetailsMultiple(requestParameters: ContributorsApiGetDetailsMultipleRequest, options?: AxiosRequestConfig): AxiosPromise<ContributorProfileDataList> {
            return localVarFp.getDetailsMultiple(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint lists collections based on contributor ID.
         * @summary List contributors\' collections
         * @param {ContributorsApiListCollectionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollections(requestParameters: ContributorsApiListCollectionsRequest, options?: AxiosRequestConfig): AxiosPromise<CollectionDataList> {
            return localVarFp.listCollections(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCollectionDetails operation in ContributorsApi.
 * @export
 * @interface ContributorsApiGetCollectionDetailsRequest
 */
export type ContributorsApiGetCollectionDetailsRequest = {
    
    /**
    * Contributor ID
    * @type {string}
    * @memberof ContributorsApiGetCollectionDetails
    */
    readonly contributorId: string
    
    /**
    * Collection ID that belongs to the contributor
    * @type {string}
    * @memberof ContributorsApiGetCollectionDetails
    */
    readonly id: string
    
}

/**
 * Request parameters for getCollectionItems operation in ContributorsApi.
 * @export
 * @interface ContributorsApiGetCollectionItemsRequest
 */
export type ContributorsApiGetCollectionItemsRequest = {
    
    /**
    * Contributor ID
    * @type {string}
    * @memberof ContributorsApiGetCollectionItems
    */
    readonly contributorId: string
    
    /**
    * Collection ID that belongs to the contributor
    * @type {string}
    * @memberof ContributorsApiGetCollectionItems
    */
    readonly id: string
    
    /**
    * Page number
    * @type {number}
    * @memberof ContributorsApiGetCollectionItems
    */
    readonly page?: number
    
    /**
    * Number of results per page
    * @type {number}
    * @memberof ContributorsApiGetCollectionItems
    */
    readonly perPage?: number
    
    /**
    * Sort order
    * @type {'newest' | 'oldest'}
    * @memberof ContributorsApiGetCollectionItems
    */
    readonly sort?: 'newest' | 'oldest'
    
}

/**
 * Request parameters for getDetails operation in ContributorsApi.
 * @export
 * @interface ContributorsApiGetDetailsRequest
 */
export type ContributorsApiGetDetailsRequest = {
    
    /**
    * Contributor ID
    * @type {string}
    * @memberof ContributorsApiGetDetails
    */
    readonly contributorId: string
    
}

/**
 * Request parameters for getDetailsMultiple operation in ContributorsApi.
 * @export
 * @interface ContributorsApiGetDetailsMultipleRequest
 */
export type ContributorsApiGetDetailsMultipleRequest = {
    
    /**
    * One or more contributor IDs
    * @type {Array<string>}
    * @memberof ContributorsApiGetDetailsMultiple
    */
    readonly id: Array<string>
    
}

/**
 * Request parameters for listCollections operation in ContributorsApi.
 * @export
 * @interface ContributorsApiListCollectionsRequest
 */
export type ContributorsApiListCollectionsRequest = {
    
    /**
    * Contributor ID
    * @type {string}
    * @memberof ContributorsApiListCollections
    */
    readonly contributorId: string
    
    /**
    * Sort order
    * @type {'newest' | 'last_updated' | 'item_count'}
    * @memberof ContributorsApiListCollections
    */
    readonly sort?: 'newest' | 'last_updated' | 'item_count'
    
}

/**
 * ContributorsApiGenerated - object-oriented interface
 * @export
 * @class ContributorsApiGenerated
 * @extends {BaseAPI}
 */
export class ContributorsApiGenerated extends BaseAPI {
    /**
     * This endpoint gets more detailed information about a contributor\'s collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     * @summary Get details about contributors\' collections
     * @param {ContributorsApiGetCollectionDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApiGenerated
     */
    public getCollectionDetails(requestParameters: ContributorsApiGetCollectionDetailsRequest, options?: AxiosRequestConfig) {
        return ContributorsApiFp(this.configuration).getCollectionDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint lists the IDs of items in a contributor\'s collection and the date that each was added.
     * @summary Get the items in contributors\' collections
     * @param {ContributorsApiGetCollectionItemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApiGenerated
     */
    public getCollectionItems(requestParameters: ContributorsApiGetCollectionItemsRequest, options?: AxiosRequestConfig) {
        return ContributorsApiFp(this.configuration).getCollectionItems(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     * @summary Get details about a single contributor
     * @param {ContributorsApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApiGenerated
     */
    public getDetails(requestParameters: ContributorsApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return ContributorsApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     * @summary Get details about multiple contributors
     * @param {ContributorsApiGetDetailsMultipleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApiGenerated
     */
    public getDetailsMultiple(requestParameters: ContributorsApiGetDetailsMultipleRequest, options?: AxiosRequestConfig) {
        return ContributorsApiFp(this.configuration).getDetailsMultiple(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint lists collections based on contributor ID.
     * @summary List contributors\' collections
     * @param {ContributorsApiListCollectionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributorsApiGenerated
     */
    public listCollections(requestParameters: ContributorsApiListCollectionsRequest, options?: AxiosRequestConfig) {
        return ContributorsApiFp(this.configuration).listCollections(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
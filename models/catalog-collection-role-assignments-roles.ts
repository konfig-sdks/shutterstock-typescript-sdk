/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CatalogCollectionRole } from './catalog-collection-role';

/**
 * 
 * @export
 * @interface CatalogCollectionRoleAssignmentsRoles
 */
export interface CatalogCollectionRoleAssignmentsRoles {
    /**
     * 
     * @type {Array<CatalogCollectionRole>}
     * @memberof CatalogCollectionRoleAssignmentsRoles
     */
    'editors'?: Array<CatalogCollectionRole>;
    /**
     * 
     * @type {Array<CatalogCollectionRole>}
     * @memberof CatalogCollectionRoleAssignmentsRoles
     */
    'owners'?: Array<CatalogCollectionRole>;
    /**
     * 
     * @type {Array<CatalogCollectionRole>}
     * @memberof CatalogCollectionRoleAssignmentsRoles
     */
    'viewers'?: Array<CatalogCollectionRole>;
}

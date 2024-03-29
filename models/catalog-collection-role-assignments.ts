/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CatalogCollectionRoleAssignmentsRoles } from './catalog-collection-role-assignments-roles';

/**
 * List of role assignments for a catalog collection
 * @export
 * @interface CatalogCollectionRoleAssignments
 */
export interface CatalogCollectionRoleAssignments {
    /**
     * 
     * @type {string}
     * @memberof CatalogCollectionRoleAssignments
     */
    'collection_id': string;
    /**
     * 
     * @type {CatalogCollectionRoleAssignmentsRoles}
     * @memberof CatalogCollectionRoleAssignments
     */
    'roles': CatalogCollectionRoleAssignmentsRoles;
}


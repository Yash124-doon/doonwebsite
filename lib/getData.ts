/**
 * @fileoverview Data fetching utilities for Doon International School
 * @description Provides centralized data access functions for static JSON data
 * @author Doon International School Development Team
 */

import infrastructureData from '../data/infrastructure.json';
import academicsData from '../data/academics.json';
import sportsData from '../data/sports.json';
import discoverDoonData from '../data/doon/discover-doon.json';

/**
 * Fetches discover page data from static JSON file
 *
 * This function provides a centralized way to access discover page content,
 * including facility navigation, facility details, updates, and other
 * discover-related information used throughout the application.
 *
 * Data includes:
 * - facilityNav: Navigation items for facilities
 * - facilities: Detailed facility information
 * - updates: Latest news and announcements
 *
 * @returns {Promise<any>} Promise resolving to discover page data object
 *
 * @example
 * ```typescript
 * const data = await getData();
 * console.log(data.facilityNav); // Array of facility navigation items
 * console.log(data.facilities); // Array of facility details
 * ```
 */
export async function getData(): Promise<any> {
  return infrastructureData;
}

/**
 * Fetches academics page data from static JSON file
 *
 * This function provides academics-specific facility information,
 * including academic programs, courses, and educational initiatives.
 *
 * @returns {Promise<PageData>} Promise resolving to academics page data
 *
 * @example
 * ```typescript
 * const data = await getAcademicsData();
 * console.log(data.facilities); // Array of academic programs
 * ```
 */
export async function getAcademicsData(): Promise<any> {
  return academicsData;
}

/**
 * Fetches sports page data from static JSON file
 *
 * This function provides sports-specific facility information,
 * including athletic facilities, sports programs, and equestrian activities.
 *
 * @returns {Promise<PageData>} Promise resolving to sports page data
 *
 * @example
 * ```typescript
 * const data = await getSportsData();
 * console.log(data.facilities); // Array of sports facilities
 * ```
 */
export async function getSportsData(): Promise<any> {
  return sportsData;
}

/**
 * Fetches discover doon page data from static JSON file
 *
 * This function provides discover doon-specific information,
 * including hero, main heading, pillars, and final CTA content.
 *
 * @returns {Promise<any>} Promise resolving to discover doon page data
 *
 * @example
 * ```typescript
 * const data = await getDiscoverDoonData();
 * console.log(data.pillars); // Array of pillar content
 * ```
 */
export async function getDiscoverDoonData(): Promise<any> {
  return discoverDoonData;
}

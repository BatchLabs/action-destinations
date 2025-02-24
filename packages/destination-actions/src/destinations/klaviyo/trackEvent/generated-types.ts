// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * Properties of the profile that triggered this event.
   */
  profile: {
    email?: string
    phone_number?: string
    /**
     * Country Code in ISO 3166-1 alpha-2 format. If provided, this will be used to validate and automatically format Phone Number field in E.164 format accepted by Klaviyo.
     */
    country_code?: string
    /**
     * A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system.
     */
    external_id?: string
    /**
     * Anonymous user identifier for the user.
     */
    anonymous_id?: string
    [k: string]: unknown
  }
  /**
   * Name of the event. Must be less than 128 characters.
   */
  metric_name: string
  /**
   * Properties of this event.
   */
  properties: {
    [k: string]: unknown
  }
  /**
   * When this event occurred. By default, the time the request was received will be used.
   *       The time is truncated to the second. The time must be after the year 2000 and can only
   *       be up to 1 year in the future.
   *
   */
  time?: string | number
  /**
   * A numeric value to associate with this event. For example, the dollar amount of a purchase.
   */
  value?: number
  /**
   * A unique identifier for an event. If the unique_id is repeated for the same
   *       profile and metric, only the first processed event will be recorded. If this is not
   *       present, this will use the time to the second. Using the default, this limits only one
   *       event per profile per second.
   *
   */
  unique_id?: string
}

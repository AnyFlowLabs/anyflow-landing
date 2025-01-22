export function tagTwitterConversion() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.twq("event", "tw-oypy7-p13qb");
}

export function pageLoad() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  twq("event", "tw-oypy7-p13st", {
    conversion_id: null, // use this to pass a unique ID for the conversion event for deduplication (e.g. order id '1a2b3c')
    email_address: null, // use this to pass a user’s email address
    phone_number: null, // phone number in E164 standard
  });
}

export const validateListing = (listing: any): boolean => {
  return (
    listing &&
    listing.Id &&
    listing.Id !== "" &&
    listing.Title &&
    listing.Title !== "" &&
    listing.Description &&
    listing.Description !== ""
  );
};

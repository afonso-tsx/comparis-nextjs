export const validateListing = (listing: any): boolean => {
  return (
    listing &&
    listing.Id !== undefined &&
    listing.Title !== undefined &&
    listing.Description !== undefined
  );
};

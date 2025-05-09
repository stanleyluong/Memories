import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '100%', // 1:1 Aspect Ratio (Square) - Instagram like
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Lighter placeholder
    backgroundSize: 'cover', // Ensures the image covers the area
    backgroundPosition: 'center', // Centers the image
    // backgroundBlendMode: 'darken', // Keep or remove based on preference
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%', // Ensure card takes full width of its container
    borderRadius: '12px', // Softer, more modern radius
    position: 'relative',
    backgroundColor: '#ffffff', // Explicitly white card
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)', // Softer, more modern shadow
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12)', // Slightly more pronounced shadow on hover
    },
  },
  // Styles for the new header section (Avatar, Name, Timestamp)
  cardHeader: {
    padding: theme.spacing(1.5, 2), // Consistent padding
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
  },
  avatar: { // If we need specific avatar styling not covered by Navbar's .purple
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    fontSize: '1rem', // For initial if no image
  },
  creatorInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  creatorName: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#262626', // Instagram-like dark text
  },
  timestamp: {
    fontSize: '0.75rem',
    color: '#8e8e8e', // Instagram-like gray for secondary text
  },
  details: { // For tags
    padding: theme.spacing(0, 2, 1, 2), // top, right, bottom, left
  },
  tags: { // Specific styling for the tags text if needed
    fontSize: '0.8rem',
    color: theme.palette.primary.main, // Or a more subtle color
    lineHeight: 1.4,
  },
  title: { // For the main post title
    padding: theme.spacing(1, 2, 0.5, 2), // Adjusted padding
    fontWeight: 600,
    fontSize: '1.1rem',
    color: '#262626',
  },
  message: { // For the post message content
    padding: theme.spacing(0, 2, 1.5, 2),
    fontSize: '0.9rem',
    color: '#262626',
    lineHeight: 1.5,
  },
  cardActions: {
    padding: theme.spacing(0.5, 1, 0.5, 1), // Reduced padding for action icons
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #efefef', // Subtle separator like Instagram
  },
  actionButton: { // Common style for like/comment/delete buttons
    color: '#262626', // Darker icon color
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    }
  },
  cardContent: { // Style for the content area below actions
    paddingTop: theme.spacing(1), // Adjust top padding as needed
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2), // Keep other paddings consistent with title/message original intent
  },
  // overlay and overlay2 are removed as their functionality will be integrated into cardHeader and card content
  // border, fullHeightCard, grid classes can be removed if no longer used after JSX changes.
}));

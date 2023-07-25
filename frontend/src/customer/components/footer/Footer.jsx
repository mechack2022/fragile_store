import React from "react";

import { Grid, Button, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <div className="bg-black">
      <Grid container sx={{ color: 'white', py: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 5 }}>
            Company
          </Typography>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Blog
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Press
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Jobs
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Partner
            </Button>
          </div>
        </Grid>
        {/* Second */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 5 }}>
            Solutions
          </Typography>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Marketing
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Commerce
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Insight
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Support
            </Button>
          </div>
        </Grid>
        {/* Third */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 5 }}>
            Documentation
          </Typography>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              API status
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Guides
            </Button>
          </div>
        </Grid>
        {/* Fourth */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 5 }}>
            Legal
          </Typography>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Claims
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Privacy
            </Button>
          </div>
          <div>
            <Button variant="h6" sx={{ pb: 5 }}>
              Terms
            </Button>
          </div>
        </Grid>
        {/* Text area */}
        <Grid item xs={12}>
          <Typography align="center" variant="body2">
            &copy; 2023 My Company, All rights reserved
          </Typography>
          <Typography align="center" variant="body2">
            Made with love by Me
          </Typography>
          <Typography align="center" variant="body2">
            Icon made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

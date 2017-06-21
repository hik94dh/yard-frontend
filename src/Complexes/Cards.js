import React from 'react';
import CardInfo from './CardInfo.js';
import { Grid } from 'react-flexbox-grid';

export default (props) => {
  return (
    <Grid>
      <CardInfo id={1} geo="SOUTH BEACH, SAN FRANCISCO" title="The Harrison" text=" The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments."  />
      <CardInfo id={2} geo="MIDTOWN EAST, MANHATTAN" title="100 East 53rd Street" text=" One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned."  />
      <CardInfo id={3} geo="NOLITA, MANHATTAN" title="152 Elizabeth" text=" One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned."  />
    </Grid>
  )
};

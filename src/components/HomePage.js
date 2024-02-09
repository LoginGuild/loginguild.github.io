import React from 'react';
import { Grid } from '@mui/material';

export default function HomePage() {
  return (
    <div>
    	<Grid container spacing={2}>
				<Grid xs={8}>
					<Item>test</Item>
				</Grid>
			</Grid>
      <header>
        <h1>My Simple React Home Page</h1>
      </header>
      <main>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </main>
    </div>
  );
}

function Item({ children }) {
	return (
		<div>
			{children}
		</div>
	);
}
import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/mehdidevv/Svelte-GH-pages.git', // Update to point to your repository
		user: {
			name: 'EL Mahdi SABRI', // update to use your name
			email: 'mehdi.saber.700@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

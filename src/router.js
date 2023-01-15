import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './app/pages/home/home';
import { AAAA } from './app/header/AAAA';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      // children: [
      //   {
      //     path: '/podcast/:podcastId',
      //     element: <PodcastDetail />,
      //     children: [
      //       {
      //         path: '',
      //         element: <EpisodesOverview />,
      //       },
      //       {
      //         path: 'episode/:episodeId',
      //         element: <EpisodeDetail />,
      //       },
      //     ],
      //   },
      // ],
    },
    {
      path: '/podcast/:podcastId',
      element: <AAAA />,
    }
  ]);

  return <RouterProvider router={router} />;
}

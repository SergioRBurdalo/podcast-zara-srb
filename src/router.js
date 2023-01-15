import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from './app/pages/home/home';
import { Detail } from './app/pages/detail/detail';
import { Episode } from './app/pages/episode/episode';

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
      element: <Detail />,
    },
    {
      path: '/podcast/:podcastId/episode/:episodeId',
      element: <Episode />,
    }
  ]);

  return <RouterProvider router={router} />;
}

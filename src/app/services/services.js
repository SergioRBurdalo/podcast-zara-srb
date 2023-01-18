import axios from 'axios';
import {wrapperType} from "../enum/enum";

export const fetchData = async ({isLoading, baseURL, setPodcasts}) => {
    try {
      isLoading(true);
        const response = await axios({
            method:"get",
            url: baseURL,
        });
      isLoading(false);
      setPodcasts(response.data.feed.entry);
    } catch (error) {
      console.log(error);
    }
  };

export const fetchDetails = async({isLoading, baseURL, setDetailPodcast, setFeedEpisodes}) =>{
    try {
        isLoading(true);
        const response = await axios({
            method:"get",
            url: baseURL,
        });
      isLoading(false);
       setDetailPodcast(response.data.results.find(ss => ss.wrapperType ===wrapperType.TRACK))
       setFeedEpisodes(response.data.results.filter(ss => ss.wrapperType ===wrapperType.PODCASTEPISODE))
} catch (error){
    console.log(error);
}
}

export const fetchEpisode = async({isLoading, baseURL, setFeedEpisodes, episodeId}) =>{
    try {
        isLoading(true);
        const response = await axios({
            method:"get",
            url: baseURL,
        });
      isLoading(false);
       setFeedEpisodes(response.data.results.find(ss => ss.trackId.toString() ===episodeId.toString()))
} catch (error){
    console.log(error);
}
}

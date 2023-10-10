import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/StoryCard';
import { fetchTopStories } from '../../services/storyService';
import AppHeader from '../../components/Header';
import { Col, Row } from 'antd';
import './Home.scss'
import { extractImageUrl } from '../../utils/utils';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopStories();
        setStories(data);
        setFilteredStories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (query) => {
    const filtered = stories.filter(story => 
      story.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStories(filtered);
  };


  if (error) {
    return <p>Error fetching stories: {error}</p>;
  }

  return (
    <div>
      <AppHeader onSearchChange={handleSearchChange} />
      <Row className="story-container" justify={'center'} gutter={[25,25]}>
        {filteredStories.map(story => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                <StoryCard 
                  key={story.title} 
                  story={story}
                  imageUrl={extractImageUrl(story.multimedia, 'Super Jumbo')}
                />
            </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;

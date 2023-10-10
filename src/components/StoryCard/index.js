import React from 'react';
import { Card } from 'antd';

const StoryCard = React.memo(({ story, imageUrl }) => (
  <Card
    hoverable
    style={{ width: "100%", height:"100%" }}
    cover={<img alt={story.title} src={imageUrl} style={{height:250}} />}
    onClick={() => window.open(story.url, "_blank")}
  >
    <Card.Meta title={story.title} description={story.abstract} />
  </Card>
));

export default StoryCard;

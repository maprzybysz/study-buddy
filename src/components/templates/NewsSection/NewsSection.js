import { Button } from 'components/atoms/Button/Button';
import React, { useEffect, useState } from 'react';
import { ArticleWrapper, NewSectionHeader, Wrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import axios from 'axios';

export const query = `{
  allArticles{
    id
    title
    category
    content
    image{
      url
    }
  }
}`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => {
        setError("Sorry, we couldn't load articles for You");
      });
  }, []);

  return (
    <Wrapper>
      <NewSectionHeader>University news feed</NewSectionHeader>
      {articles.length > 0 && !error ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewSectionHeader>{error ? error : 'Loading...'}</NewSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;

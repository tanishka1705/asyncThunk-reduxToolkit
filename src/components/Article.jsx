import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../store/articleReducer";

const { Heading, ListItem, Box, Text, List, Button, Spinner, Flex, Alert, AlertIcon, AlertTitle } = require("@chakra-ui/react");

function Article() {

    const { articles, loading, error } = useSelector(state => state.article)

    console.log(articles)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch])

    return (
        <Box>
            <Heading textAlign={"center"} mt={10}>Most emailed articles on NYTimes.com in 7 Days</Heading>

            {loading ? (

                <Flex justifyContent="center" alignItems="center" height="70vh">
                    <Spinner size="xl" />
                </Flex>

            ) : error ? (
                <Flex justifyContent="center" alignItems="center" height="40vh">
                    <Alert status="error" mt={10} maxW="250px" >
                        <AlertIcon />
                        <AlertTitle>Error Loading Data</AlertTitle>
                    </Alert>
                </Flex>


            ) : articles && articles.length > 0 && (
                <List ml={20}>
                    {articles.map(article => (
                        <ListItem key={article.id}  >
                            <Heading as="h6" mt={10}>{article.title}</Heading>
                            <Text mt={5}>{article.abstract}</Text>
                            <Text ml={10} mt={2}> -{article.byline}</Text>

                            <a href={article.url} target="_blank">
                                <Button mt="3" colorScheme="blue">
                                    Read Full Article
                                </Button>
                            </a>
                        </ListItem>
                    ))}
                </List>

            )}

        </Box>
    )
}
export default Article;
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { createApolloClient } from '../../../lib/apolloClient';
import { GET_SOME_DATA } from '../../../graphql/queries';
import { NextResponse } from 'next/server';

export const GET = withApiAuthRequired(async function fetchSomeData(req) {
  try {
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res);
    if (!accessToken) {
      throw new Error("Access token is undefined. Authentication failed.");
    }

    console.log("Access Token: " + accessToken);

    // Create Apollo Client with the access token
    const apolloClient = createApolloClient(accessToken);

    console.log("Request headers:", {
      Authorization: `Bearer ${accessToken}`,
    });

    // Execute the GraphQL query
    const { data } = await apolloClient.query({
      query: GET_SOME_DATA, // Use the query you imported
    });

    // Return the GraphQL data as a response
    return NextResponse.json(data, res);
  } catch (error) {
    console.error("Error fetching landing data:", error);

    // Safely handle unknown error type
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
});

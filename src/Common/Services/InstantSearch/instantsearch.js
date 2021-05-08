import React, { useState }from 'react'
import { InstantSearch, Hits, SearchBox, } from 'react-instantsearch/dom'
import { connectStateResults } from 'react-instantsearch/connectors'

import algoliasearch from 'algoliasearch/lite';
import * as Env from "../../../environments";
import "./instantSearch.css"
import { useHistory, Link} from "react-router-dom";

function FancySearch() {
    const searchClient = algoliasearch(
        Env.ALGO_APP_ID,
        Env.ALGO_ADMIN_KEY
    );

    const Results = connectStateResults(
        ({ searchState, searchResults, children }) =>
            searchResults && searchState.query && searchResults.nbHits !== 0 ? (
                children
            ) : null
    );

    const Hit = ({ hit }) => (
        <div>
            <Link to={hit.pagename}>{hit.pagename}</Link>
        </div>
    );

    return (
        <div className="ais-InstantSearch">
            <InstantSearch searchClient={searchClient} indexName="webdevproject">
                <div className="right-panel">
                    <SearchBox />
                    <Results>
                        <Hits hitComponent={Hit} />
                    </Results>
                </div>
            </InstantSearch>
        </div>
    )
}

export default FancySearch

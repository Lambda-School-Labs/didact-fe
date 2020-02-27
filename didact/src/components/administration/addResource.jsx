import React, { useState } from 'react';

const addResource = () => {
    const freshDate = new Date()
    const [contentType, setContentType] = useState('')
    const [articleValues, setArticleValues] = useState({
        date: freshDate.toISOString().slice(0, 10),
        title: '',
        brief: '',
        body: '',
        topic: ''
    })
    const [nonArticleValues, setNonArticleValues] = useState({
        name: '',
        link: '',
        description: '',
        topic: ''
    })

    const handleChange = e => {

    }

    return (
        <div>
            <select value={contentType} onChange={handleChange}>
                <option value="article">Article</option>
                <option value="tool">Tool</option>
                <option value="source">Source</option>
            </select>
            {contentType === 'article' ? (
                <form onSubmit={handleArticleSubmit}>
                   <label>Title</label>
                   <input value={articleValues.title} onChange={handleChange} />
                   <label>Brief</label>
                   <input value={articleValues.brief} onChange={handleChange}/>
                   <label>Body</label>
                   <input value={articleValues.body} onChange={handleChange}/>
                   <label>Topic</label>
                   <input value={articleValues.topic} onChange={handleChange}/>
                   <button type="submit">Submit</button>
                </form>
            ) : (
                <form onSubmit={handleAltSubmit}>
                   <label>Name</label>
                   <input value={nonArticleValues.name} onChange={handleChange} />
                   <label>Link</label>
                   <input value={nonArticleValues.link} onChange={handleChange}/>
                   <label>Description</label>
                   <input value={nonArticleValues.description} onChange={handleChange}/>
                   <label>Topic</label>
                   <input value={nonArticleValues.topic} onChange={handleChange}/>
                   <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}
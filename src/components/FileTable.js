import React from 'react';
import '../App.css';
import { List } from 'antd';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';

function isFile(props) {

    console.log(props)
    // eslint-disable-next-line 
    if(props == 'file'){
        return <FileOutlined />;
    }

    return <FolderOutlined />;
}

const FileTable = () => {

    const axios = require('axios');

    const dataURL = 'http://localhost:5000/data'

    let [responseData, setResponseData] = React.useState('')

    axios.get(dataURL)
    .then(resp => {
        setResponseData(resp.data)
    })
    .catch(error => {
        console.log(error);
    });    

    console.log(responseData);
    return (
        <List 
            itemLayout="horizontal"
            dataSource={responseData}
            renderItem={item => (        
                <List.Item className="expanded">
                    <List.Item.Meta className="expanded"
                        avatar={isFile(item.type)}
                        title={item.name}
                    />
                    <div className="expanded" >{item.time.split(', ').join(' ')}</div>
                </List.Item> 
            )}
        />
    )
}

export default FileTable;
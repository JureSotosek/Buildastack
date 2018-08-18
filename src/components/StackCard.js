import React from 'react';

const StackCard = ({ title, author }) => (
  <div
    style={{
      width: '100%',
      width: 250,
      marginTop: 10,
      borderRadius: 5,
      boxShadow: '0 5px 15px 0 rgba(37,44,97,0.15)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <div
      style={{
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span style={{ fontSize: 15, color: 'black' }}>{title}</span>
        <span style={{ color: 'grey', fontSize: 10 }}>{author}</span>
      </div>
    </div>
    <div
      style={{
        minWidth: 30,
        paddingLeft: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#ff7faa',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        fontSize: 15
      }}
    >
      👎🏼
    </div>
  </div>
);

export default StackCard;

import React from 'react'

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '1.5rem',
      backgroundColor: '#f8f9fa', 
      borderBottom: '1px solid #dee2e6', 
      gap: '1.5rem'
    }}>

      <div style={{
        display:'flex',
        gap: '1.5rem',
        marginLeft: 'auto',
        paddingRight:'5rem'
      }}>
      
      <div style={{
        height:'3rem',
        width: '11rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'grey',
        borderRadius: '3rem',
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
          }}><button>
            Download Booklet
          </button>
      </div>
      <div style={{
        height:'3rem',
        width: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'grey',
        borderRadius: '3rem',
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
          }}><button>
            Kontak
          </button>
      </div>
      <div style={{
        position: 'relative',              // allows absolute positioning inside
        height: '3rem',
        width: '14rem',
        display: 'flex',
        justifyContent: 'center',         // centers TIS FTUI horizontally
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: '3rem',
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
        padding: '0 0.5rem',
      }}>
        <button style={{
          borderRadius: '1rem',
          border: 'none',
          zIndex: 1,    
          marginRight: '1.5rem',
        }}>
          TIS FTUI
        </button>

        {/* Circle button */}
        <button style={{
          position: 'absolute',
          right: '0rem',                // move circle more to the right
          backgroundColor: '#4CAF50',
          borderRadius: '2rem',
          border: 'none',
          padding: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2px',
          height: '3rem',
          width: '3rem',
        }}>
          <div style={{
            width: '1.2rem',
            height: '2.5px',
            backgroundColor: 'white',
          }} />
          <div style={{
            width: '1.2rem',
            height: '2.5px',
            backgroundColor: 'white',
          }} />
          <div style={{
            width: '1.2rem',
            height: '2.5px',
            backgroundColor: 'white',
          }} />
        </button>
      </div>
      </div>

      
    </header>
  );
}

export default Header;
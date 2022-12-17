import './Main.css';

export default function Main() {
	function handleLinkButtonClick(url=''){
		window.open(url)
	}
  return (
    <div className="App">
		<h1>ANGEL ORGANIZATION</h1>
		<form onSubmit={()=>handleLinkButtonClick('https://twitter.com/praiseelokimyh')}>
		  <button>Twitter</button>
		</form>
		<form onSubmit={()=>handleLinkButtonClick('https://www.instagram.com/diamarivvv/')}>
		  <button>Instagram</button>
		</form>
		<form onSubmit={()=>handleLinkButtonClick('https://t.me/praiseelokimyh')}>
		  <button>Telegram</button>
	    </form>
		<form onSubmit={()=>handleLinkButtonClick('https://github.com/diamarivvv')}>
		  <button>Github</button>
	    </form>
    </div>
  );
}


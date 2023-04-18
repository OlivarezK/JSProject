/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftList = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, hairStyle, eyeColor, powerLevel) {
    const nft = {
        "name": name,
        "hairStyle": hairStyle,
        "eyeColor": eyeColor,
        "powerLevel": powerLevel
    };

    nftList.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftList.length; i++){
        console.log("Name: " + nftList[i].name);
        console.log("Hair Style: " + nftList[i].hairStyle)
        console.log("Eye Color: " + nftList[i].eyeColor)
        console.log("Power LEvel: " + nftList[i].powerLevel + "\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftList.length;
}

// call your functions below this line
mintNFT("Goku", "Fade", "Yellow", 9500);
mintNFT("Vegeta", "Mawhawk", "Black", 4500);

if (getTotalSupply() !== 0) {
    console.log("Total NFTs Minted: " + getTotalSupply() + "\n");
    listNFTs();
} else {
    console.log("No NFTs were minted.")
}

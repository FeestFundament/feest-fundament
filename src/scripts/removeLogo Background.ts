import logoImage from '../assets/logo-primary.png';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

// This script removes the background from the logo
async function processLogo() {
  try {
    console.log('Loading logo...');
    
    // Fetch the logo image
    const response = await fetch(logoImage);
    const blob = await response.blob();
    
    // Load image
    const img = await loadImage(blob);
    console.log('Logo loaded, removing background...');
    
    // Remove background
    const processedBlob = await removeBackground(img);
    console.log('Background removed successfully!');
    
    // Create download link
    const url = URL.createObjectURL(processedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo-transparent.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Logo downloaded! Please replace src/assets/logo-primary.png with this file.');
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

// Run the script
processLogo();

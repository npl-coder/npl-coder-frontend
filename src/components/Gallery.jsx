import {
  Box,
  SimpleGrid,
  Image,
  keyframes,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

//Dynamically importing all the images from the dishes directory
const images = import.meta.glob("../assets/dishes/*.{jpg,jpeg,png,svg, JPG, PNG}");

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    }
    `;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fadeOutSpinner, setFadeOutSpinner] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = await Promise.all(
        Object.keys(images).map(async (key, index) => {
          const image = await images[key]();
          return {
            id: index + 1,
            src: image.default,
            alt: `Image ${index + 1}`,
          };
        })
      );
      setGalleryItems(importedImages);
      console.log(galleryItems);
      setTimeout(() => {
        setFadeOutSpinner(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, 1000);
    };
    loadImages();
  }, []);
  // Randomly assign row spans for masonry effect
  const getRowSpan = () => {
    const spans = [1, 2, 4, 5, 6];
    const ranSpan = spans[Math.floor(Math.random() * spans.length)];
    return ranSpan;
  };

  return (
    <Flex direction="column" minHeight="100vh">
    <Box flex="1" p={5}>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100vh"  animation={fadeOutSpinner ? `${fadeOut} 0.5s ease-in-out` : 'none'}>
          <Spinner size="xl" thickness="4px" color="teal.500" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {galleryItems.map((item, index) => (
            <Box
              key={item.id}
              gridRow={`span ${getRowSpan()}`}
              overflow="hidden"
              borderRadius="md"
              position="relative"
              animation={`${fadeIn} 2s ease-in-out ${index * 0.1}s forwards`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                objectFit="cover"
                width="100%"
                height="100%"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)" }}
                loading = "lazy"
              />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
    </Flex>
  );
};

export default Gallery;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


interface NewsItem {
  article_id: string;
  title: string;
  description: string;
  image_url: string | null;
  source_name: string;
}


export default function NewsScreen() {
  
  const { logout } = useContext(AuthContext)!;
   const API_KEY = 'pub_08145d745cc54c998d9158dc600fb598';
 const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=pk&language=en`
      );

      const data = await response.json();
      setNews(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}:any) => (
    <View style={styles.card}>
      {item.image_url && (
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>
        {item.title}
      </Text>

      <Text style={styles.source}>
        {item.source_name}
      </Text>

      <Text numberOfLines={3}>
        {item.description}
      </Text>
    </View>
  );

  return (
     <View style={{ flex: 1 }}>
    <TouchableOpacity
      style={styles.logoutButton}
      onPress={logout}
    >
      <Text style={styles.logoutText}>
        Logout
      </Text>
    </TouchableOpacity>
    
    <FlatList
      data={news}
      keyExtractor={(item) => item.article_id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 10 }}
    />
      </View>
   
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  source: {
    color: 'gray',
    marginBottom: 5,
  },
  logoutButton: {
  backgroundColor: '#ff4444',
  padding: 12,
  margin: 10,
  borderRadius: 8,
  alignItems: 'center',
},

logoutText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
});
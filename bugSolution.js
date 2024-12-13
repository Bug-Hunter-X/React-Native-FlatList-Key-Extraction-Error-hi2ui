To fix this, ensure that you provide a unique key for each item in your data.  The best practice is to use a unique identifier from your data source, such as a database ID. If no such ID exists, consider using a library to generate UUIDs.

```javascript
<FlatList
  data={data}
  keyExtractor={(item) => item.id} // Use a unique identifier
  renderItem={({ item }) => <Text>{item.text}</Text>}
/>
```
If you don't have unique IDs, you can use a library such as `uuid`:

```javascript
import { v4 as uuidv4 } from 'uuid';

const data = data.map((item) => ({ ...item, id: uuidv4() }));
```
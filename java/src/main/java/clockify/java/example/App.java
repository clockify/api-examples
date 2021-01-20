package clockify.java.example;

import java.io.IOException;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.HttpEntity;
import org.apache.http.util.EntityUtils;


public class App {
    private final static String url = "https://api.clockify.me/api/v1/user";

    public static void main(String[] args) throws IOException {
        final HttpGet request = new HttpGet(App.url);
        request.addHeader("X-Api-Key", System.getenv("CLOCKIFY_API_KEY"));

        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(request)) {

            HttpEntity entity = response.getEntity();
            if (entity != null) {
                String result = EntityUtils.toString(entity);
                System.out.println(result);
            }

        }
    }
}

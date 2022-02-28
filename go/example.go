package main

import (
	"context"
	"github.com/MegaGrindStone/glockify"
	"log"
)

func main() {
	apiKey := "<YOUR_API_KEY>"
	gl := glockify.New(apiKey)
	ctx := context.Background()

	workspaces, err := gl.Workspace.All(ctx)
	if err != nil {
		log.Fatalf("%v", err)
	}
	if len(workspaces) == 0 {
		log.Printf("Workspace empty")
	}
	clients, err := workspaces[0].Client.All(ctx, glockify.ClientAllFilter{})
	if err != nil {
		log.Fatalf("%v", err)
	}
	for _, client := range clients {
		log.Printf("ID:%s, Name: %s", client.ID, client.Name)
	}
}
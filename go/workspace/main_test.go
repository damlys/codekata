package main

import "testing"

func TestSayHello(t *testing.T) {
	got := SayHello()
	want := "Hello world!"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}

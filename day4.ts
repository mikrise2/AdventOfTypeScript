type Address = { address: string; city: string };
type PresentDeliveryList<T> = Record<keyof T, Address>;;
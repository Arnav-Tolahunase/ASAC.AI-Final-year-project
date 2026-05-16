"""
Test script for the /explain endpoint
"""
import requests
import base64

# Test with dummy data
test_data = {
    "predicted_class": "DeepFake",
    "confidence": 95.5,
    "image_base64": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",  # 1x1 red pixel
    "heatmap_base64": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="  # 1x1 red pixel
}

print("Testing /explain endpoint...")
print(f"Sending request to http://localhost:8000/explain")
print(f"Predicted class: {test_data['predicted_class']}")
print(f"Confidence: {test_data['confidence']}%")
print()

try:
    response = requests.post(
        "http://localhost:8000/explain",
        json=test_data,
        timeout=60
    )
    
    print(f"Status Code: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print("\n✅ SUCCESS!")
        print("\n📝 Simple Explanation:")
        print(result.get("simple", "No simple explanation"))
        print("\n🔬 Technical Explanation:")
        print(result.get("technical", "No technical explanation"))
    else:
        print(f"\n❌ ERROR: {response.status_code}")
        print(response.text)
        
except requests.exceptions.ConnectionError:
    print("❌ ERROR: Could not connect to backend at http://localhost:8000")
    print("Make sure the backend is running!")
except requests.exceptions.Timeout:
    print("❌ ERROR: Request timed out (took more than 60 seconds)")
    print("This might happen if Ollama is not running or the model is loading")
except Exception as e:
    print(f"❌ ERROR: {e}")
